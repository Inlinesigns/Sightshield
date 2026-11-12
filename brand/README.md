# SightShield brand (working, not final)

Set 12 Nov 2026. The logo is Zac's working version from CorelDRAW and may still change. The colours come from the logo canvas (Round 3 onwards). Everything here is for documents that need to look branded now.

## Logo

| File | Use |
| --- | --- |
| `logo/sightshield-logo-source-white-on-black.pdf` | Zac's Corel export, the source. Do not edit. |
| `logo/sightshield-logo-carbon.png` | Full lockup in carbon on transparent. White paper, documents, headers. |
| `logo/sightshield-logo-white.png` | Full lockup in white on transparent. Carbon or photo backgrounds. |
| `logo/sightshield-mark-carbon.png`, `logo/sightshield-mark-white.png` | Shield mark alone. Small spaces, icons, film-edge labels. |

PNGs are cut from the PDF at 150 dpi of a very large page, so they are 4465 px wide for the lockup. For cut vinyl or print, use the Corel master, not the PNGs.

## Colour

| Name | Hex | Use |
| --- | --- | --- |
| Carbon | #1B1C1E | Logo, headings, body text, cover block, table headers |
| Hi-vis Lime | #D4FF00 | Accent only, and only on carbon. Never text on white: it cannot be read. |
| Concrete | #C8CCCF | Rules, secondary text on carbon |
| Mist | #EEF0F1 | Light fills: table banding, note boxes |
| Muted | #5A6065 | Labels, captions, header and footer text |

## Type

Barlow Condensed Bold for headings, Barlow for body. Both are free Google fonts. If a PC does not have them, Word substitutes another font and the layout shifts slightly; install them from Google Fonts on any PC that edits these documents. The wordmark in the logo is artwork, not a font.

## Document template

`templates/SightShield Document Template.dotx` is the Word template: double-click it and Word opens a new untitled document from it. The `.docx` is the same thing for editing directly, and the `.pdf` shows how it should look.

What it has: a carbon cover block with the white logo, title, one-line subtitle and a lime stripe; a details table (prepared for, reference, prepared by, date); Heading 1, 2 and 3 styles; square bullets; numbered steps; a data table with a carbon header row that repeats across pages; a note box; the logo and document title in the header from page 2; company line and page numbers in the footer.

Placeholders are in square brackets. Replace `[DOCUMENT TITLE]` in both the cover and the page header. The footer ABN reads "[to come]" until Beveridge Carey confirms it.

To rebuild after a change: `node brand/templates/build-template.js` from a folder that holds the logo PNGs (the script reads them by file name).
