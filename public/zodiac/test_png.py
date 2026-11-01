import zlib
import struct
import sys
import os

def read_png(filename):
    with open(filename, 'rb') as f:
        signature = f.read(8)
        assert signature == b'\x89PNG\r\n\x1a\n', "Invalid PNG signature"
        
        idat_chunks = []
        width = height = bit_depth = color_type = None
        
        while True:
            chunk_header = f.read(8)
            if not chunk_header:
                break
            length, chunk_type = struct.unpack('>I4s', chunk_header)
            data = f.read(length)
            crc = f.read(4)
            
            if chunk_type == b'IHDR':
                width, height, bit_depth, color_type, compression, filter_method, interlace = struct.unpack('>IIBBBBB', data)
                print(f"IHDR: {width}x{height}, bit_depth={bit_depth}, color_type={color_type}, interlace={interlace}")
            elif chunk_type == b'IDAT':
                idat_chunks.append(data)
            elif chunk_type == b'IEND':
                break
                
        raw_data = zlib.decompress(b''.join(idat_chunks))
        
        # Bytes per pixel
        if color_type == 6: # RGBA
            bpp = 4
        elif color_type == 2: # RGB
            bpp = 3
        elif color_type == 0: # Grayscale
            bpp = 1
        elif color_type == 4: # Grayscale + Alpha
            bpp = 2
        else:
            raise ValueError(f"Unsupported color type: {color_type}")
            
        stride = width * bpp
        pixels = bytearray(width * height * bpp)
        
        # Unfilter
        raw_offset = 0
        pixel_offset = 0
        
        prev_row = bytearray(stride)
        
        for y in range(height):
            filter_type = raw_data[raw_offset]
            raw_offset += 1
            curr_row = bytearray(raw_data[raw_offset:raw_offset+stride])
            raw_offset += stride
            
            unfiltered = bytearray(stride)
            if filter_type == 0: # None
                unfiltered = curr_row
            elif filter_type == 1: # Sub
                for x in range(stride):
                    left = unfiltered[x - bpp] if x >= bpp else 0
                    unfiltered[x] = (curr_row[x] + left) & 0xff
            elif filter_type == 2: # Up
                for x in range(stride):
                    up = prev_row[x]
                    unfiltered[x] = (curr_row[x] + up) & 0xff
            elif filter_type == 3: # Average
                for x in range(stride):
                    left = unfiltered[x - bpp] if x >= bpp else 0
                    up = prev_row[x]
                    unfiltered[x] = (curr_row[x] + ((left + up) >> 1)) & 0xff
            elif filter_type == 4: # Paeth
                for x in range(stride):
                    a = unfiltered[x - bpp] if x >= bpp else 0
                    b = prev_row[x]
                    c = prev_row[x - bpp] if x >= bpp else 0
                    p = a + b - c
                    pa = abs(p - a)
                    pb = abs(p - b)
                    pc = abs(p - c)
                    if pa <= pb and pa <= pc:
                        pr = a
                    elif pb <= pc:
                        pr = b
                    else:
                        pr = c
                    unfiltered[x] = (curr_row[x] + pr) & 0xff
            else:
                raise ValueError(f"Unknown filter type: {filter_type}")
                
            prev_row = unfiltered
            pixels[pixel_offset:pixel_offset+stride] = unfiltered
            pixel_offset += stride
            
        return width, height, bpp, color_type, pixels

def write_png(filename, width, height, bpp, color_type, pixels):
    stride = width * bpp
    raw_lines = bytearray()
    
    for y in range(height):
        raw_lines.append(0) # Filter type 0: None
        offset = y * stride
        raw_lines.extend(pixels[offset:offset+stride])
        
    compressed = zlib.compress(raw_lines, 6)
    
    with open(filename, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        
        # IHDR
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, color_type, 0, 0, 0)
        ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
        f.write(struct.pack('>I4s', len(ihdr_data), b'IHDR'))
        f.write(ihdr_data)
        f.write(struct.pack('>I', ihdr_crc))
        
        # IDAT
        idat_crc = zlib.crc32(b'IDAT' + compressed)
        f.write(struct.pack('>I4s', len(compressed), b'IDAT'))
        f.write(compressed)
        f.write(struct.pack('>I', idat_crc))
        
        # IEND
        iend_crc = zlib.crc32(b'IEND')
        f.write(struct.pack('>I4s', 0, b'IEND'))
        f.write(struct.pack('>I', iend_crc))

def crop_image(pixels, orig_w, orig_h, bpp, x, y, crop_w, crop_h):
    crop_pixels = bytearray(crop_w * crop_h * bpp)
    orig_stride = orig_w * bpp
    crop_stride = crop_w * bpp
    
    for row in range(crop_h):
        orig_y = y + row
        if 0 <= orig_y < orig_h:
            src_start = orig_y * orig_stride + x * bpp
            src_end = src_start + crop_stride
            dst_start = row * crop_stride
            crop_pixels[dst_start:dst_start+crop_stride] = pixels[src_start:src_end]
            
    return crop_pixels

print("Testing PNG reader...")
w, h, bpp, ctype, px = read_png("public/zodiac/zodiac_grid.png")
print(f"Read PNG successfully: {w}x{h}, bpp={bpp}")
