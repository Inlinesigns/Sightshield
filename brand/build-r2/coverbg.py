# Round 2 cover background with no live text: carbon field, ray, crop marks, wordmark,
# lime hi-vis edge with a vertical label, and the concrete title-block panel.
# Title, subtitle and title-block cells are added as live Word text on top.
# Usage: python coverbg.py <out folder> <vertical label> <tag>
import os, sys
OUT, VLABEL, TAG = sys.argv[1], sys.argv[2], sys.argv[3]
A = '../preview/a/'
C, K, L, M, T = '#1B1C1E', '#C8CCCF', '#D4FF00', '#5A6065', '#3A3C40'
FONTS = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600&family=Barlow:wght@300;400&display=swap">'
COND = "font-family: 'Barlow Condensed', sans-serif; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase"
VERT = f"{COND}; writing-mode: vertical-rl; transform: rotate(180deg); color: {C}"
html = f'''<!doctype html><html><head><meta charset="utf-8">{FONTS}<style>body{{margin:0}}</style></head><body>
<div style="width: 794px; height: 1123px; position: relative; overflow: hidden; background: {C}">
<img src="{A}mark-tone-carbon.svg" style="position: absolute; width: 2400px; height: 2400px; left: -623px; top: -804px; display: block">
<div style="position: absolute; left: 48px; top: 48px; width: 14px; height: 14px; border-left: 1px solid {M}; border-top: 1px solid {M}"></div>
<div style="position: absolute; left: 48px; top: 725px; width: 14px; height: 14px; border-left: 1px solid {M}; border-bottom: 1px solid {M}"></div>
<img src="{A}sightshield-wordmark-white.svg" style="position: absolute; left: 72px; top: 76px; width: 170px; height: auto; display: block">
<div style="position: absolute; right: 0; top: 0; width: 96px; height: 763px; background: {L}; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 76px 0 48px; box-sizing: border-box">
<div style="width: 10px; height: 10px; border-radius: 50%; background: {C}"></div>
<span style="{VERT}; font-size: 13px">{VLABEL}</span>
</div>
<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 336px; background: {K}">
<div style="position: absolute; left: 72px; right: 72px; bottom: 48px; display: flex; justify-content: space-between; {COND}; font-size: 11px; color: {T}">
<span>SightShield Pty Ltd</span><span>ABN 32 703 567 551</span></div>
</div>
</div></body></html>'''
open(os.path.join(OUT, f'coverbg-{TAG}.html'), 'w', encoding='utf-8').write(html)
print('ok')
