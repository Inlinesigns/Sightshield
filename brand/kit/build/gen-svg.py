import json, sys
k = json.load(open('kit-paths.json'))
mx0, my0, mx1, my1 = k['mark_bounds']; wx0, wy0, wx1, wy1 = k['word_bounds']
M, W = k['mark'], k['word']
def svg(vb, body, title):
    x, y, w, h = vb
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x:.1f} {y:.1f} {w:.1f} {h:.1f}" width="{w:.0f}" height="{h:.0f}">'
            f'<title>{title}</title>{body}</svg>\n')
def mark(c, dx=0, dy=0, s=1): return f'<path fill="{c}" fill-rule="evenodd" transform="translate({dx:.2f} {dy:.2f}) scale({s:.5f})" d="{M}"/>'
def word(c, dx=0, dy=0, s=1): return f'<path fill="{c}" transform="translate({dx:.2f} {dy:.2f}) scale({s})" d="{W}"/>'
C = {'carbon': '#1B1C1E', 'white': '#FFFFFF', 'lime': '#D4FF00'}
out = {}
# horizontal: the original layout, cropped to the artwork
hx0, hy0, hx1, hy1 = min(mx0, wx0), min(my0, wy0), max(mx1, wx1), max(my1, wy1)
hvb = (hx0, hy0, hx1 - hx0, hy1 - hy0)
# stacked, rule of three (decision 32d54f76, 12 Nov 2026): mark height = 3x wordmark height, gap = 1/3 wordmark height
wh, ww, mh, mw = wy1 - wy0, wx1 - wx0, my1 - my0, mx1 - mx0
ss = 3 * wh / mh; gap = wh / 3
mdx = (wx0 + ww / 2) - (mx0 + mw / 2) * ss; mdy = (wy0 - gap - 3 * wh) - my0 * ss
svb = (wx0, wy0 - gap - 3 * wh, ww, 3 * wh + gap + wh)
mvb = (mx0, my0, mw, mh)
wvb = (wx0, wy0, ww, wh)
combos = {'carbon': ('carbon', 'carbon'), 'white': ('white', 'white'), 'lime': ('lime', 'lime'), 'lime-white': ('lime', 'white')}
for name, (mc, wc) in combos.items():
    out[f'sightshield-logo-horizontal-{name}.svg'] = svg(hvb, mark(C[mc]) + word(C[wc]), f'SightShield logo, horizontal, {name}')
    out[f'sightshield-logo-stacked-{name}.svg'] = svg(svb, mark(C[mc], mdx, mdy, ss) + word(C[wc]), f'SightShield logo, stacked, {name}')
for name in ['carbon', 'white', 'lime']:
    out[f'sightshield-mark-{name}.svg'] = svg(mvb, mark(C[name]), f'SightShield mark, {name}')
    out[f'sightshield-wordmark-{name}.svg'] = svg(wvb, word(C[name]), f'SightShield wordmark, {name}')
d = sys.argv[1]
for f, t in out.items(): open(f'{d}/{f}', 'w').write(t)
print(len(out), 'files; horizontal', [round(v) for v in hvb], 'stacked', [round(v) for v in svb])
