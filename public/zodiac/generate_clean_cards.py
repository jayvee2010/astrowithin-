import zlib
import struct
import os

def read_png(filename):
    with open(filename, 'rb') as f:
        f.read(8)
        idat = []
        width = height = None
        while True:
            chunk = f.read(8)
            if not chunk: break
            length, t = struct.unpack('>I4s', chunk)
            d = f.read(length)
            f.read(4)
            if t == b'IHDR':
                width, height = struct.unpack('>II', d[:8])
            elif t == b'IDAT': idat.append(d)
            elif t == b'IEND': break
            
    raw = zlib.decompress(b''.join(idat))
    bpp = 4
    stride = width * bpp
    pixels = bytearray(width * height * bpp)
    raw_offset = 0
    pixel_offset = 0
    prev_row = bytearray(stride)
    
    for y in range(height):
        filter_type = raw[raw_offset]
        raw_offset += 1
        curr_row = bytearray(raw[raw_offset:raw_offset+stride])
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
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pr = a if pa <= pb and pa <= pc else (b if pb <= pc else c)
                unfiltered[x] = (curr_row[x] + pr) & 0xff
                
        prev_row = unfiltered
        pixels[pixel_offset:pixel_offset+stride] = unfiltered
        pixel_offset += stride
        
    return width, height, bpp, pixels

def write_png(filename, width, height, bpp, pixels):
    stride = width * bpp
    raw_lines = bytearray()
    for y in range(height):
        raw_lines.append(0)
        offset = y * stride
        raw_lines.extend(pixels[offset:offset+stride])
        
    compressed = zlib.compress(raw_lines, 9)
    with open(filename, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
        f.write(struct.pack('>I4s', len(ihdr_data), b'IHDR') + ihdr_data + struct.pack('>I', zlib.crc32(b'IHDR' + ihdr_data)))
        f.write(struct.pack('>I4s', len(compressed), b'IDAT') + compressed + struct.pack('>I', zlib.crc32(b'IDAT' + compressed)))
        f.write(struct.pack('>I4s', 0, b'IEND') + struct.pack('>I', zlib.crc32(b'IEND')))

def crop(pixels, orig_w, orig_h, bpp, x, y, cw, ch):
    out = bytearray(cw * ch * bpp)
    orig_stride = orig_w * bpp
    out_stride = cw * bpp
    for row in range(ch):
        oy = y + row
        if 0 <= oy < orig_h:
            src_start = oy * orig_stride + x * bpp
            dst_start = row * out_stride
            out[dst_start:dst_start+out_stride] = pixels[src_start:src_start+out_stride]
    return out

w, h, bpp, pixels = read_png("public/zodiac/zodiac_grid.png")

# Precise Card boundaries with margin tolerance
# Cols: 0: (11, 153), 1: (189, 153), 2: (367, 153)
# Rows: 0: (14, 230), 1: (271, 230), 2: (526, 230), 3: (782, 230)

cols = [
    (11, 154),
    (188, 154),
    (366, 154)
]

rows = [
    (14, 231),
    (271, 231),
    (526, 231),
    (782, 231)
]

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
    cropped_data = crop(pixels, w, h, bpp, x, y, cw, ch)
    out_file = f"public/zodiac/cropped/{card['id']}.png"
    write_png(out_file, cw, ch, bpp, cropped_data)
    print(f"Generated {card['id']}.png ({cw}x{ch})")

print("All 12 card images accurately generated!")
