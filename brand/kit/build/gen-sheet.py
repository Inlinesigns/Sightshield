import re, sys, os
D = sys.argv[1]
def svg(name, h=None, w=None):
    s = open(os.path.join(D, name)).read()
    s = re.sub(r'<title>.*?</title>', '', s)
    size = (f'height="{h}"' if h else f'width="{w}"')
    return re.sub(r'width="\d+" height="\d+"', size + ' role="img" aria-label="SightShield logo"', s, count=1)
C = dict(carbon='#1B1C1E', lime='#D4FF00', concrete='#C8CCCF', mist='#EEF0F1', white='#FFFFFF', muted='#5A6065')
html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>SightShield logo and colour kit</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&family=Barlow+Condensed:wght@600;700&display=swap">
<style>
@page {{ size: A4 landscape; margin: 0 }}
* {{ box-sizing: border-box }}
body {{ margin: 0; font-family: Barlow, Arial, sans-serif; color: {C['carbon']}; background: #fff }}
.page {{ width: 297mm; height: 210mm; padding: 13mm 15mm 11mm; position: relative; page-break-after: always; overflow: hidden }}
.page:last-child {{ page-break-after: auto }}
h1 {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 700; font-size: 26pt; margin: 0; letter-spacing: .01em }}
h2 {{ font-family: 'Barlow Condensed', Arial Narrow, sans-serif; font-weight: 700; font-size: 13pt; margin: 0 0 3mm; text-transform: uppercase; letter-spacing: .08em }}
.top {{ display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1.2pt solid {C['carbon']}; padding-bottom: 3mm; margin-bottom: 6mm }}
.sub {{ font-size: 9.5pt; color: {C['muted']} }}
.grid4 {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm }}
.tile {{ height: 30mm; display: flex; align-items: center; justify-content: center; border-radius: 1.5mm }}
.cap {{ font-size: 8pt; color: {C['muted']}; margin-top: 1.5mm; line-height: 1.35 }}
.cap b {{ color: {C['carbon']} }}
.row {{ display: grid; grid-template-columns: 1.35fr 1fr; gap: 9mm; margin-top: 7mm }}
.marks {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm }}
.marks .tile {{ height: 34mm }}
.foot {{ position: absolute; left: 15mm; right: 15mm; bottom: 7mm; font-size: 7.5pt; color: {C['muted']}; display: flex; justify-content: space-between }}
.sw {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm }}
.chip {{ height: 26mm; border-radius: 1.5mm; padding: 3mm; display: flex; align-items: flex-end; font-family: 'Barlow Condensed'; font-weight: 700; font-size: 13pt }}
.vals {{ font-size: 8.5pt; margin-top: 2mm; line-height: 1.45 }}
.vals span {{ color: {C['muted']}; display: inline-block; width: 13mm }}
table {{ width: 100%; border-collapse: collapse; font-size: 8.5pt }}
th {{ text-align: left; background: {C['carbon']}; color: #fff; font-family: 'Barlow Condensed'; font-weight: 700; font-size: 9pt; padding: 1.8mm 2.5mm; border-bottom: 1.2mm solid {C['lime']} }}
td {{ padding: 1.8mm 2.5mm; border-bottom: .4pt solid {C['concrete']}; vertical-align: top }}
ul {{ margin: 0; padding-left: 4.5mm; font-size: 8.8pt; line-height: 1.5 }}
.two {{ display: grid; grid-template-columns: 1fr 1fr; gap: 9mm; margin-top: 6mm }}
.note {{ background: {C['mist']}; padding: 3mm 4mm; border-radius: 1.5mm; font-size: 8.5pt; line-height: 1.45; margin-top: 3mm }}
.cs {{ display: flex; gap: 6mm; align-items: center }}
.csbox {{ position: relative; padding: 7mm; outline: .5pt dashed {C['muted']}; background: repeating-linear-gradient(45deg, #fff 0 2mm, {C['mist']} 2mm 4mm) }}
.csbox .inner {{ background: #fff; padding: 0 }}
</style></head><body>

<section class="page">
  <div class="top"><div><h1>SightShield logo and colour kit</h1><div class="sub">Working version, 12 Nov 2026. Not final. Built from Zac's CorelDRAW logo.</div></div>
  {svg('sightshield-logo-horizontal-carbon.svg', h=26)}</div>

  <h2>Horizontal logo</h2>
  <div class="grid4">
    <div><div class="tile" style="background:#fff;outline:.4pt solid {C['concrete']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on white.</b> Documents, quotes, forms, white vehicles.</div></div>
    <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-logo-horizontal-lime-white.svg', w=210)}</div><div class="cap"><b>Lime and white on carbon.</b> The hero version. Signage, socials, dark vehicles.</div></div>
    <div><div class="tile" style="background:{C['lime']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on lime.</b> Hi-vis panels, workwear, booth.</div></div>
    <div><div class="tile" style="background:{C['concrete']}">{svg('sightshield-logo-horizontal-carbon.svg', w=210)}</div><div class="cap"><b>Carbon on concrete.</b> Grey vehicles, light backgrounds.</div></div>
  </div>

  <div class="row">
    <div>
      <h2>Stacked logo and mark</h2>
      <div class="marks">
        <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-logo-stacked-lime-white.svg', w=150)}</div><div class="cap"><b>Stacked.</b> Square spaces: hard hats, profile pictures, decals.</div></div>
        <div><div class="tile" style="background:#fff;outline:.4pt solid {C['concrete']}">{svg('sightshield-mark-carbon.svg', h=86)}</div><div class="cap"><b>Mark alone.</b> Film-edge labels, icons and small spaces, where people already know the name.</div></div>
        <div><div class="tile" style="background:{C['carbon']}">{svg('sightshield-mark-lime.svg', h=86)}</div><div class="cap"><b>Lime mark on carbon.</b> App icon, social avatar, stickers.</div></div>
      </div>
    </div>
    <div>
      <h2>Clear space and minimum size</h2>
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
  <div class="foot"><span>SightShield Pty Ltd (name pending ASIC)</span><span>Page 1 of 2</span></div>
</section>

<section class="page">
  <div class="top"><div><h1>Colour and type</h1><div class="sub">Three colours plus white. Lime is the accent and only ever sits on carbon or as a solid panel.</div></div>
  {svg('sightshield-logo-horizontal-carbon.svg', h=26)}</div>

  <div class="sw">
    <div><div class="chip" style="background:{C['carbon']};color:#fff">Carbon</div><div class="vals"><span>HEX</span>#1B1C1E<br><span>RGB</span>27 28 30<br><span>CMYK</span>10 7 0 88 (conversion)<br><span>Use</span>Logo, text, backgrounds</div></div>
    <div><div class="chip" style="background:{C['lime']};color:{C['carbon']}">Hi-vis Lime</div><div class="vals"><span>HEX</span>#D4FF00<br><span>RGB</span>212 255 0<br><span>CMYK</span>17 0 100 0 (prints duller)<br><span>Use</span>Accent on carbon, panels</div></div>
    <div><div class="chip" style="background:{C['concrete']};color:{C['carbon']}">Concrete</div><div class="vals"><span>HEX</span>#C8CCCF<br><span>RGB</span>200 204 207<br><span>CMYK</span>3 1 0 19 (conversion)<br><span>Use</span>Rules, secondary panels</div></div>
    <div><div class="chip" style="background:#fff;color:{C['carbon']};outline:.4pt solid {C['concrete']}">White</div><div class="vals"><span>HEX</span>#FFFFFF<br><span>RGB</span>255 255 255<br><span>Tint</span>Mist #EEF0F1 for light fills<br><span>Use</span>Paper, text on carbon</div></div>
  </div>

  <div class="two">
    <div>
      <h2>Closest cut vinyl</h2>
      <table>
        <tr><th>Colour</th><th>Best match</th><th>Also close</th></tr>
        <tr><td><b>Carbon</b></td><td>Hexis HXS5889M Coal Black Matt (stocked)</td><td>HXS5889B Coal Black Gloss</td></tr>
        <tr><td><b>Concrete</b></td><td>Metamark M7-122 Pale Grey</td><td>ImagePerfect IP5710 Pearl Grey Gloss; Hexis S5428B Cloud Grey Gloss</td></tr>
        <tr><td><b>Hi-vis Lime</b></td><td>No standard match</td><td>Needs a fluorescent film. Ask Spicers for a fluoro yellow-green cut vinyl.</td></tr>
      </table>
      <div class="note"><b>Check a physical swatch before ordering.</b> These are screen matches from supplier colour data. Hi-vis lime is a fluorescent colour that standard vinyl and CMYK print cannot reach. Fluorescent films also fade faster outdoors, so use lime for indoor signs, workwear and accents, and keep vehicles to carbon and white with a lime detail.</div>
    </div>
    <div>
      <h2>Type</h2>
      <div style="font-family:'Barlow Condensed';font-weight:700;font-size:24pt;line-height:1">Headings in Barlow Condensed Bold</div>
      <div style="font-size:11pt;margin:2mm 0 4mm">Body text in Barlow Regular, with Barlow SemiBold for labels.</div>
      <div class="cap">Both are free Google fonts and already used in the Word template. The SIGHT SHIELD wordmark is artwork from the logo file, not typed text.</div>
      <h2 style="margin-top:6mm">Keep it right</h2>
      <ul>
        <li>Use the supplied files. Do not retype, redraw, stretch, outline or add effects.</li>
        <li>Lime is never text on white. It cannot be read.</li>
        <li>Only the colours on this page. One-colour versions for cut vinyl and embroidery.</li>
        <li>On photos, put the logo on a carbon panel or use the white version on a dark area.</li>
      </ul>
    </div>
  </div>
  <div class="foot"><span>Files: svg (vector, for Corel and the plotter) and png (transparent, for documents and screens), in carbon, white, lime and lime-white.</span><span>Page 2 of 2</span></div>
</section>
</body></html>'''
open(sys.argv[2], 'w').write(html)
print('written', len(html))
