import sys, fitz
from PIL import Image
pdf, out = sys.argv[1], sys.argv[2]
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 45
d = fitz.open(pdf); ims = []
for pg in d:
    pm = pg.get_pixmap(dpi=dpi); ims.append(Image.frombytes('RGB', (pm.width, pm.height), pm.samples))
W, H = ims[0].width, ims[0].height; n = len(ims); cols = min(n, 3); rows = (n + cols - 1) // cols
c = Image.new('RGB', (W * cols + 10 * (cols - 1), H * rows + 10 * (rows - 1)), '#888')
for i, im in enumerate(ims): c.paste(im, ((i % cols) * (W + 10), (i // cols) * (H + 10)))
c.save(out); print(n, 'pages')
