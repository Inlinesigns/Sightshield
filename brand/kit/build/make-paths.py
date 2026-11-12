# Turns Zac's logo PDF (converted with: pdftocairo -svg logo.pdf logo-source.svg) into clean mark and wordmark paths.
# Path order in the source: 0 black background, 1 wordmark, 2 white square (with a transform), 3 black shield with ray holes.
import re, json
from fontTools.svgLib.path import parse_path
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from pathops import Path, op, PathOp, FillType
s = open('logo-source.svg').read()
els = re.findall(r'<path([^>]*)/>', s)
def P(attrs, ft):
    d = re.search(r' d="([^"]*)"', attrs).group(1)
    t = re.search(r'transform="matrix\(([^)]*)\)"', attrs)
    p = Path(); pen = p.getPen()
    if t: pen = TransformPen(pen, tuple(float(v) for v in t.group(1).split(',')))
    parse_path(d, pen); p.fillType = ft; return p
square, shield, word = P(els[2], FillType.EVEN_ODD), P(els[3], FillType.EVEN_ODD), P(els[1], FillType.WINDING)
mark = op(square, shield, PathOp.DIFFERENCE)
word = op(word, Path(), PathOp.UNION)
def svgd(p):
    pen = SVGPathPen(None, ntos=lambda v: ('%.2f' % v).rstrip('0').rstrip('.')); p.draw(pen); return pen.getCommands()
json.dump({'mark': svgd(mark), 'word': svgd(word), 'mark_bounds': mark.bounds, 'word_bounds': word.bounds}, open('kit-paths.json', 'w'))
