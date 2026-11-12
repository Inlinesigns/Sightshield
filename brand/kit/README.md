# SightShield logo and colour kit (working, 12 Nov 2026)

Start with `SightShield Logo and Colour Kit.pdf`: two pages covering every logo version, clear space, minimum sizes, colours, closest cut vinyls and type. The `.html` is the same sheet and opens in any browser.

## Files

| Folder | What | Use for |
| --- | --- | --- |
| `svg/` | Vector logo files | CorelDRAW, the plotter, print, anything that scales |
| `png/` | Transparent PNGs, 2400 px wide (horizontal), 1600 px (stacked), 1200 px (mark) | Word, email, web, socials |

Each comes in:

| Version | Files |
| --- | --- |
| Horizontal logo | `sightshield-logo-horizontal-<carbon, white, lime, lime-white>` |
| Stacked logo | `sightshield-logo-stacked-<carbon, white, lime, lime-white>` |
| Mark alone | `sightshield-mark-<carbon, white, lime>` |
| Wordmark alone | `sightshield-wordmark-<carbon, white, lime>` |

The stacked logo follows the rule of three (decision 32d54f76, 12 Nov 2026): the mark is 3 times the wordmark height and the gap between them is a third of the wordmark height. Its PNGs are 1600 x 789 px.

`lime-white` is the lime mark with a white wordmark, for carbon backgrounds. The others are one colour throughout, which is what cut vinyl and embroidery need.

The mark is one compound shape: the square with the shield cut out and the rays left in. In Zac's Corel file the shield is a black shape on a white square and its top edge pokes slightly above the square, hidden by the black background. In these files the shield is subtracted properly so one-colour versions cut cleanly.

## Colours

| Name | HEX | RGB | CMYK (screen conversion) | Closest vinyl |
| --- | --- | --- | --- | --- |
| Carbon | #1B1C1E | 27 28 30 | 10 7 0 88 | Hexis HXS5889M Coal Black Matt (stocked) |
| Hi-vis Lime | #D4FF00 | 212 255 0 | 17 0 100 0, prints duller | No standard match; needs a fluorescent film |
| Concrete | #C8CCCF | 200 204 207 | 3 1 0 19 | Metamark M7-122 Pale Grey; ImagePerfect IP5710 Pearl Grey Gloss; Hexis S5428B Cloud Grey Gloss |
| White | #FFFFFF | 255 255 255 | 0 0 0 0 | |
| Mist (tint) | #EEF0F1 | 238 240 241 | | Light fills in documents only |

Colour split (decision 63eb9abc, 12 Nov 2026): on any layout, such as a document, vehicle, booth or uniform, use 60% carbon, 30% concrete and 10% hi-vis lime. Lime is the loud 10% and still only goes on carbon.

Vinyl matches come from the vinyl-colour-match data (supplier swatch photos and published CMYK). Check a physical swatch before ordering. No Pantone references are set yet; pick them from a physical swatch book.

## Minimum sizes

| Use | Horizontal logo | Mark alone |
| --- | --- | --- |
| Print | 40 mm wide | 10 mm wide |
| Screen | 200 px wide | 32 px wide |
| Cut vinyl | 200 mm wide | 30 mm wide |

The cut vinyl sizes come from measuring the files: the narrowest gaps between the rays are about 12 logo units, so at 30 mm the mark's gaps are about 1.2 mm. Test cut once at the smallest size before a run.

Clear space: half the mark's height on every side.

## Rebuilding

`build/` holds the scripts that made this kit from Zac's PDF. If the Corel logo changes, export a new PDF and rerun them: `make-paths.py` (needs fonttools and skia-pathops), then `gen-svg.py`, `render.js` for PNGs, `gen-sheet.py` and `topdf.js` for the sheet.
