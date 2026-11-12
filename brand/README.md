# SightShield brand (working, not final)

Set 12 Nov 2026. The logo is Zac's working version from CorelDRAW and may still change. The colours come from the logo canvas (Round 3 onwards). Everything here is for documents that need to look branded now.

## Logo and colour kit

`kit/` is the working logo and colour kit (12 Nov 2026): vector SVGs and transparent PNGs of the horizontal logo, stacked logo, mark and wordmark in carbon, white, lime and lime-white, plus a two-page PDF sheet with colours, closest vinyls, clear space and minimum sizes. Start with `kit/README.md`. The files below are the first cut from 12 Nov and are kept for reference.

## Logo (first cut)

| File | Use |
| --- | --- |
| `logo/sightshield-logo-source-white-on-black.pdf` | Zac's Corel export, the source. Do not edit. |
| `logo/sightshield-logo-carbon.png` | Full lockup in carbon on transparent. White paper, documents, headers. |
| `logo/sightshield-logo-white.png` | Full lockup in white on transparent. Carbon or photo backgrounds. |
| `logo/sightshield-mark-carbon.png`, `logo/sightshield-mark-white.png` | Shield mark alone. Small spaces, icons, film-edge labels. |

PNGs are cut from the PDF at 150 dpi of a very large page, so they are 4465 px wide for the lockup, saved with a reduced palette to keep them small with no visible change. For cut vinyl or print, use the Corel master, not the PNGs.

## Colour

| Name | Hex | Use |
| --- | --- | --- |
| Carbon | #1B1C1E | Logo, headings, body text, cover block, table headers |
| Hi-vis Lime | #D4FF00 | Accent only, and only on carbon. Never text on white: it cannot be read. |
| Concrete | #C8CCCF | Rules, secondary text on carbon |
| Mist | #EEF0F1 | Lighter option to concrete for fills: note boxes, table bands, panels (decision 328a1813, 12 Nov 2026). A neutral, outside the split |
| Muted | #5A6065 | Section numbers, captions, header reference |
| Graphite | #3A3C40 | Secondary body text and labels on white or concrete (Round 2 documents) |

Colour split (decision 63eb9abc, 12 Nov 2026): on any layout, use 60% carbon, 30% concrete and 10% hi-vis lime. White, mist and muted are neutrals for paper and text, not part of the split.

On white paper (letters, report pages, email) the split counts the printed area only; the paper stays white (decision 89c03fc0, 12 Nov 2026).

Install tools (squeegees and other application tools) swap the split: 60% lime, 30% concrete, 10% carbon. On tools, lime does not need to sit on carbon (decision 46e06776, 12 Nov 2026).

Stacked logo (decision 32d54f76, 12 Nov 2026): the mark is 3 times the wordmark height, and the gap is a third of the wordmark height. The kit files follow this.

## Type

Round 2: headings in Barlow Condensed Regular, in capitals, with a muted two-digit section number (01, 02). Labels, table headers and captions in Barlow Condensed Bold, spaced capitals. Body in Barlow. Both are free Google fonts. If a PC does not have them, Word substitutes another font and the layout shifts slightly; install them from Google Fonts on any PC that edits these documents. The wordmark in the logo is artwork, not a font.

## Document template

`SightShield Document Template.dotx` (in 05 Brand\3 Final) is the Word template, rebuilt in the Round 2 style on 12 Nov 2026: double-click it and Word opens a new untitled document from it. The `.docx` is the same thing for editing directly, and the `.pdf` shows how it should look. The Round 1 version is kept in 05 Brand\2 Working\Superseded Round 1.

What it has: a full-page carbon cover with the ray, the lime hi-vis edge and a concrete title block (prepared for, prepared by, status, date, revision, sheets), with the reference, title and subtitle as editable text; a header with the mark, the document title and the reference; numbered Heading 1 and spaced-capital Heading 2 styles; square bullets; numbered steps; a data table with a carbon header row and lime edge that repeats across pages; a concrete note box; a concrete contact block; and the carbon footer band with the company line and sheet numbers.

Placeholders are in square brackets. Replace `[Document title]` on the cover and in the header, and the `SS-[0000]` reference in both. Document numbers so far: SS-0001 company overview, SS-0002 accountant meeting agenda.

To rebuild after a change: the scripts are in 05 Brand\2 Working\Round 2 document build. `r2lib.js` holds the shared style, `build-template-r2.js` builds the template, `coverbg.py` makes the cover artwork, and `export.ps1` exports the PDF (and `.dotx` with `-Dotx`) through Word. Needs Node with the `docx` package and the Barlow fonts installed.

## Which revision to use

Use the latest revision of the brand system on everything unless Zac says otherwise (decision 101632bd, 12 Nov 2026). The latest is Round 2 refined: ray device, mark grid, 60/30/10 with the lime hi-vis edge, title blocks and the carbon footer band. The working boards are on the SightShield Refined Stationery canvas (Round 2 page) and in 05 Brand\2 Working\Refined stationery samples. The company overview (06 Commercial\3 Final) is the reference build for documents.
