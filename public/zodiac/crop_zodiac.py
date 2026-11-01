import zlib
import struct
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
            elif chunk_type == b'IDAT':
                idat_chunks.append(data)
            elif chunk_type == b'IEND':
                break
                
        raw_data = zlib.decompress(b''.join(idat_chunks))
        bpp = 4 # RGBA
            
        stride = width * bpp
        pixels = bytearray(width * height * bpp)
        
        raw_offset = 0
        pixel_offset = 0
        prev_row = bytearray(stride)
        
        for y in range(height):
            filter_type = raw_data[raw_offset]
            raw_offset += 1
            curr_row = bytearray(raw_data[raw_offset:raw_offset+stride])
            raw_offset += stride
            
            unfiltered = bytearray(stride)
            if filter_type == 0:
                unfiltered = curr_row
            elif filter_type == 1:
                for x in range(stride):
                    left = unfiltered[x - bpp] if x >= bpp else 0
                    unfiltered[x] = (curr_row[x] + left) & 0xff
            elif filter_type == 2:
                for x in range(stride):
                    up = prev_row[x]
                    unfiltered[x] = (curr_row[x] + up) & 0xff
            elif filter_type == 3:
                for x in range(stride):
                    left = unfiltered[x - bpp] if x >= bpp else 0
                    up = prev_row[x]
                    unfiltered[x] = (curr_row[x] + ((left + up) >> 1)) & 0xff
            elif filter_type == 4:
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
                    
            prev_row = unfiltered
            pixels[pixel_offset:pixel_offset+stride] = unfiltered
            pixel_offset += stride
            
        return width, height, bpp, color_type, pixels

def write_png(filename, width, height, bpp, color_type, pixels):
    stride = width * bpp
    raw_lines = bytearray()
    
    for y in range(height):
        raw_lines.append(0)
        offset = y * stride
        raw_lines.extend(pixels[offset:offset+stride])
        
    compressed = zlib.compress(raw_lines, 6)
    
    with open(filename, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, color_type, 0, 0, 0)
        ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
        f.write(struct.pack('>I4s', len(ihdr_data), b'IHDR'))
        f.write(ihdr_data)
        f.write(struct.pack('>I', ihdr_crc))
        
        idat_crc = zlib.crc32(b'IDAT' + compressed)
        f.write(struct.pack('>I4s', len(compressed), b'IDAT'))
        f.write(compressed)
        f.write(struct.pack('>I', idat_crc))
        
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

w, h, bpp, ctype, pixels = read_png("public/zodiac/zodiac_grid.png")

# Grid coordinates:
# 4 rows, 3 columns
# Total width = 535, Total height = 1024
# Column boundaries:
# Col 0: x=10, w=156
# Col 1: x=188, w=156
# Col 2: x=366, w=156
# Row boundaries:
# Row 0: y=12, h=230
# Row 1: y=262, h=230
# Row 2: y=512, h=230
# Row 3: y=762, h=230

cols = [
    (10, 156),
    (188, 156),
    (366, 156)
]

rows = [
    (12, 230),
    (262, 230),
    (512, 230),
    (762, 230)
]

# Mapping matrix (row, col) to zodiac sign ID:
# Row 0: Aquarius (Kumbha), Gemini (Mithuna), Libra (Tula)
# Row 1: Pisces (Meena), Cancer (Karka), Scorpio (Vrishchika)
# Row 2: Aries (Mesha), Leo (Simha), Sagittarius (Dhanu)
# Row 3: Capricorn (Makara), Virgo (Kanya), Taurus (Vrishabha)

zodiac_cards = [
    {"id": "aquarius", "row": 0, "col": 0, "name": "Aquarius"},
    {"id": "gemini", "row": 0, "col": 1, "name": "Gemini"},
    {"id": "libra", "row": 0, "col": 2, "name": "Libra"},
    {"id": "pisces", "row": 1, "col": 0, "name": "Pisces"},
    {"id": "cancer", "row": 1, "col": 1, "name": "Cancer"},
    {"id": "scorpio", "row": 1, "col": 2, "name": "Scorpio"},
    {"id": "aries", "row": 2, "col": 0, "name": "Aries"},
    {"id": "leo", "row": 2, "col": 1, "name": "Leo"},
    {"id": "sagittarius", "row": 2, "col": 2, "name": "Sagittarius"},
    {"id": "capricorn", "row": 3, "col": 0, "name": "Capricorn"},
    {"id": "virgo", "row": 3, "col": 1, "name": "Virgo"},
    {"id": "taurus", "row": 3, "col": 2, "name": "Taurus"}
]

os.makedirs("public/zodiac/cropped", exist_ok=True)

for card in zodiac_cards:
    x, cw = cols[card["col"]]
    y, ch = rows[card["row"]]
    
    cropped_px = crop_image(pixels, w, h, bpp, x, y, cw, ch)
    out_path = f"public/zodiac/cropped/{card['id']}.png"
    write_png(out_path, cw, ch, bpp, ctype, cropped_px)
    print(f"Cropped {card['name']} ({card['id']}): x={x}, y={y}, w={cw}, h={ch} -> {out_path}")

print("All 12 zodiac cards successfully cropped!")
