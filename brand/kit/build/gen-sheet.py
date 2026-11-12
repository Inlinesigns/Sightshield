import re, sys, os
D = sys.argv[1]
def svg(name, h=None, w=None):
    s = open(os.path.join(D, name)).read()
    s = re.sub(r'<title>.*?</title>', '', s)
    size = (f'height="{h}"' if h else f'width="{w}"')
    return re.sub(r'width="\d+" height="\d+"', size + ' role="img" aria-label="SightShield logo"', s, count=1)
import base64
RAY = base64.b64encode(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mark-tone-carbon.svg'), 'rb').read()).decode()
C = dict(carbon='#1B1C1E', lime='#D4FF00', concrete='#C8CCCF', mist='#EEF0F1', white='#FFFFFF', muted='#5A6065', text2='#3A3C40')
html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>SightShield logo and colour kit</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600&family=Barlow+Condensed:wght@500;600&display=swap">
<style>
@page {{ size: A4 landscape; margin: 0 }}
* {{ box-sizing: border-box }}
body {{ margin: 0; font-family: Barlow, Arial, sans-serif; color: {C['carbon']}; background: #fff; font-variant-numeric: tabular-nums }}
.page {{ width: 297mm; height: 210mm; padding: 11mm 15mm 0; position: relative; page-break-after: always; overflow: hidden }}
.page:last-child {{ page-break-after: auto }}
.lab {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 600; letter-spacing: .22em; text-transform: uppercase }}
.hdr {{ display: flex; justify-content: space-between; align-items: center; border-bottom: .75pt solid {C['carbon']}; padding-bottom: 2.4mm; margin-bottom: 5mm; font-size: 7.5pt }}
.hdr .l {{ display: flex; align-items: center; gap: 3mm; color: {C['carbon']} }}
.hdr .r {{ color: {C['muted']} }}
h1 {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 500; font-size: 30pt; line-height: .95; margin: 0; text-transform: uppercase; letter-spacing: .01em }}
.top {{ display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 5mm }}
.sub {{ font-size: 9.5pt; color: {C['text2']}; margin-top: 1.5mm }}
h2 {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 500; font-size: 14pt; margin: 0 0 3mm; text-transform: uppercase; letter-spacing: .02em }}
h2 .n {{ color: {C['muted']}; margin-right: 2.5mm }}
.grid4 {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm }}
.tile {{ height: 28mm; display: flex; align-items: center; justify-content: center }}
.cap {{ font-size: 8pt; color: {C['text2']}; margin-top: 1.6mm; line-height: 1.4 }}
.cap b {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: {C['carbon']}; font-size: 7.6pt }}
.row {{ display: grid; grid-template-columns: 1.35fr 1fr; gap: 9mm; margin-top: 6mm }}
.marks {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm }}
.marks .tile {{ height: 32mm }}
.band {{ position: absolute; left: 0; right: 0; bottom: 0; height: 15mm; background: {C['carbon']}; overflow: hidden }}
.band img {{ position: absolute; width: 260mm; height: 260mm; left: -10mm; top: -150mm; display: block }}
.band .txt {{ position: absolute; left: 15mm; bottom: 4.6mm; font-size: 6.8pt; color: {C['concrete']}; max-width: 205mm }}
.band .edge {{ position: absolute; right: 0; bottom: 0; width: 46mm; height: 12mm; background: {C['lime']}; color: {C['carbon']}; font-size: 7pt; display: flex; align-items: flex-end; justify-content: flex-end; padding: 0 15mm 4.6mm 0 }}
.band .edge .dot {{ position: absolute; left: 4mm; top: 3.4mm; width: 2.2mm; height: 2.2mm; border-radius: 50%; background: {C['carbon']} }}
.sw {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm }}
.chip {{ height: 24mm; padding: 3mm; display: flex; align-items: flex-end; font-size: 8pt }}
.vals {{ font-size: 8.5pt; margin-top: 2mm; line-height: 1.5 }}
.vals span {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 600; letter-spacing: .14em; font-size: 7.4pt; color: {C['muted']}; display: inline-block; width: 13mm }}
table {{ width: 100%; border-collapse: collapse; font-size: 8.5pt }}
th {{ text-align: left; background: {C['carbon']}; color: #fff; font-family: 'Barlow Condensed'; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; font-size: 7.6pt; padding: 1.9mm 2.5mm; border-bottom: 1.2mm solid {C['lime']} }}
td {{ padding: 1.8mm 2.5mm; border-bottom: .4pt solid {C['concrete']}; vertical-align: top; color: {C['text2']} }}
td b {{ font-family: 'Barlow Condensed'; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: {C['carbon']} }}
tr:last-child td {{ border-bottom: .9pt solid {C['carbon']} }}
ul {{ margin: 0; padding-left: 4.5mm; font-size: 8.8pt; line-height: 1.5; list-style: square }}
.two {{ display: grid; grid-template-columns: 1fr 1fr; gap: 9mm; margin-top: 6mm }}
.note {{ background: {C['concrete']}; border-left: 1.1mm solid {C['carbon']}; padding: 3mm 4mm; font-size: 8.3pt; line-height: 1.45; margin-top: 3mm }}
.cs {{ display: flex; gap: 6mm; align-items: center }}
.csbox {{ position: relative; padding: 7mm; outline: .5pt dashed {C['muted']}; background: repeating-linear-gradient(45deg, #fff 0 2mm, {C['concrete']} 2mm 2.6mm) }}
.csbox .inner {{ background: #fff; padding: 0 }}
</style></head><body>

<section class="page">
  <div class="hdr"><div class="l">{svg('sightshield-mark-carbon.svg', h=15)}<span class="lab">Logo and colour kit</span></div><span class="lab r">Working  ·  12 Nov 2026</span></div>
  <div class="top"><div><h1>SightShield logo and colour kit</h1><div class="sub">Working version, 12 Nov 2026. Not final. Built from Zac's CorelDRAW logo.</div></div></div>

  <h2><span class="n">01</span>Horizontal logo</h2>
  <div class="grid4">
    <div><div class="tile" style="background:#fff;outline:.4pt solid {C['concrete']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on white.</b> Documents, quotes, forms, white vehicles.</div></div>
    <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-logo-horizontal-lime-white.svg', w=210)}</div><div class="cap"><b>Lime and white on carbon.</b> The hero version. Signage, socials, dark vehicles.</div></div>
    <div><div class="tile" style="background:{C['lime']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on lime.</b> Hi-vis panels, workwear, booth.</div></div>
    <div><div class="tile" style="background:{C['concrete']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on concrete.</b> Grey vehicles, light backgrounds.</div></div>
  </div>

  <div class="row">
    <div>
      <h2><span class="n">02</span>Stacked logo and mark</h2>
      <div class="marks">
        <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-logo-stacked-lime-white.svg', w=150)}</div><div class="cap"><b>Stacked.</b> Square spaces: hard hats, profile pictures, decals. Mark is 3x the wordmark height, gap is 1/3 of it.</div></div>
        <div><div class="tile" style="background:#fff;outline:.4pt solid {C['concrete']}">{svg('sightshield-mark-carbon.svg', h=86)}</div><div class="cap"><b>Mark alone.</b> Film-edge labels, icons and small spaces, where people already know the name.</div></div>
        <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-mark-lime.svg', h=86)}</div><div class="cap"><b>Lime mark on carbon.</b> App icon, social avatar, stickers.</div></div>
      </div>
    </div>
    <div>
      <h2><span class="n">03</span>Clear space and minimum size</h2>
      <div class="cs"><div class="csbox"><div class="inner">{svg('sightshield-logo-horizontal-carbon.svg', w=200)}</div></div>
      <div class="cap" style="margin:0">Keep clear space of <b>half the mark's height</b> on every side (the hatched band).</div></div>
      <table style="margin-top:4mm">
        <tr><th>Use</th><th>Horizontal logo</th><th>Mark alone</th></tr>
        <tr><td>Print</td><td>40 mm wide</td><td>10 mm wide</td></tr>
        <tr><td>Screen</td><td>200 px wide</td><td>32 px wide</td></tr>
        <tr><td>Cut vinyl</td><td>200 mm wide</td><td>30 mm wide</td></tr>
      </table>
      <div class="cap">Cut vinyl minimums keep the gaps between the rays over about 1 mm. Test cut once at the smallest size before a run.</div>
    </div>
  </div>
  <div class="band"><img src="data:image/svg+xml;base64,{RAY}" alt=""><div class="txt lab">SightShield Pty Ltd  ·  ABN 32 703 567 551  ·  Moree NSW</div><div class="edge lab"><div class="dot"></div>Sheet 1 / 2</div></div>
</section>

<section class="page">
  <div class="hdr"><div class="l">{svg('sightshield-mark-carbon.svg', h=15)}<span class="lab">Logo and colour kit</span></div><span class="lab r">Working  ·  12 Nov 2026</span></div>
  <div class="top"><div><h1>Colour and type</h1><div class="sub">Three colours plus white. Lime is the accent and only ever sits on carbon or as a solid panel.</div></div></div>

  <div class="sw">
    <div><div class="chip" style="background:{C['carbon']};color:#fff"><span class="lab">Carbon</span></div><div class="vals"><span>HEX</span>#1B1C1E<br><span>RGB</span>27 28 30<br><span>CMYK</span>10 7 0 88 (conversion)<br><span>Use</span>Logo, text, backgrounds</div></div>
    <div><div class="chip" style="background:{C['lime']};color:{C['carbon']}"><span class="lab">Hi-vis Lime</span></div><div class="vals"><span>HEX</span>#D4FF00<br><span>RGB</span>212 255 0<br><span>CMYK</span>17 0 100 0 (prints duller)<br><span>Use</span>Accent on carbon, panels</div></div>
    <div><div class="chip" style="background:{C['concrete']};color:{C['carbon']}"><span class="lab">Concrete</span></div><div class="vals"><span>HEX</span>#C8CCCF<br><span>RGB</span>200 204 207<br><span>CMYK</span>3 1 0 19 (conversion)<br><span>Use</span>Rules, secondary panels</div></div>
    <div><div class="chip" style="background:#fff;color:{C['carbon']};outline:.4pt solid {C['concrete']}"><span class="lab">White</span></div><div class="vals"><span>HEX</span>#FFFFFF<br><span>RGB</span>255 255 255<br><span>Tint</span>Mist #EEF0F1 for light fills<br><span>Use</span>Paper, text on carbon</div></div>
  </div>

  <div class="two">
    <div>
      <h2><span class="n">04</span>Closest cut vinyl</h2>
      <table>
        <tr><th>Colour</th><th>Best match</th><th>Also close</th></tr>
        <tr><td><b>Carbon</b></td><td>Hexis HXS5889M Coal Black Matt (stocked)</td><td>HXS5889B Coal Black Gloss</td></tr>
        <tr><td><b>Concrete</b></td><td>Metamark M7-122 Pale Grey</td><td>ImagePerfect IP5710 Pearl Grey Gloss; Hexis S5428B Cloud Grey Gloss</td></tr>
        <tr><td><b>Hi-vis Lime</b></td><td>No standard match</td><td>Needs a fluorescent film. Ask Spicers for a fluoro yellow-green cut vinyl.</td></tr>
      </table>
      <div class="note"><b>Check a physical swatch before ordering.</b> These are screen matches from supplier colour data. Hi-vis lime is a fluorescent colour that standard vinyl and CMYK print cannot reach. Fluorescent films also fade faster outdoors, so use lime for indoor signs, workwear and accents, and keep vehicles to carbon and white with a lime detail.</div>
    </div>
    <div>
      <h2><span class="n">05</span>Type</h2>
      <div style="font-family:'Barlow Condensed';font-weight:500;font-size:24pt;line-height:1;text-transform:uppercase">Headings in Barlow Condensed</div>
      <div class="lab" style="font-size:8pt;margin:2.4mm 0 1.6mm">Labels in Barlow Condensed SemiBold, spaced capitals</div>
      <div style="font-size:11pt;margin:0 0 3mm">Body text in Barlow Regular.</div>
      <div class="cap">Both are free Google fonts, used in the Word template and the company overview. Headings are set in capitals with a muted section number. The SIGHT SHIELD wordmark is artwork from the logo file, not typed text.</div>
      <h2 style="margin-top:6mm"><span class="n">06</span>Keep it right</h2>
      <ul>
        <li>Use the supplied files. Do not retype, redraw, stretch, outline or add effects.</li>
        <li>Lime is never text on white. It cannot be read.</li>
        <li>Colour split on any layout: 60% carbon, 30% concrete, 10% lime. On white paper it counts the printed area only.</li>
        <li>Install tools swap it: 60% lime, 30% concrete, 10% carbon, with a carbon working edge.</li>
        <li>Only the colours on this page. One-colour versions for cut vinyl and embroidery.</li>
        <li>On photos, put the logo on a carbon panel or use the white version on a dark area.</li>
      </ul>
    </div>
  </div>
  <div class="band"><img src="data:image/svg+xml;base64,{RAY}" alt=""><div class="txt lab">Files: svg (vector, for Corel and the plotter) and png (transparent, for documents and screens), in carbon, white, lime and lime-white.</div><div class="edge lab"><div class="dot"></div>Sheet 2 / 2</div></div>
</section>
</body></html>'''
open(sys.argv[2], 'w', encoding='utf-8').write(html)
print('written', len(html))
