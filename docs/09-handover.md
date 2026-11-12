# Handover: cloud session to desktop session

Written 12 Nov 2026 at the end of the first cloud session. Read `CLAUDE.md` first, then this. Everything below is a pointer; the detail is in the files named.

## Why the move

The cloud session could only reach OneDrive through the Microsoft 365 connector, which uploads by retyping every byte. Text files went across fine. Logo files, PDFs and the Word template could not be sent reliably, so they never reached OneDrive. A session on Zac's PC writes straight into the synced OneDrive folder, so file-heavy work (logos, templates, PDFs, cut files) belongs there.

## Where everything is

| What | Where |
| --- | --- |
| Working memory | `CLAUDE.md` in the GitHub repo `Inlinesigns/Sightshield`, branch `claude/sight-shield-audit-info-untbti` (not yet merged to main) |
| All planning docs | `docs/00` to `docs/09` in the repo, copied to OneDrive `00 Admin\3 Final` |
| Brand files | `brand/` in the repo (first-cut logo PNGs, Word template) and `brand/kit/` (full logo and colour kit) |
| SightShield files on the PC | OneDrive `Documents\BUSINESS FILES\SightShield` (the full local path is probably under `C:\Users\macza\`, confirm on the PC) |
| Folder layout | `docs/08-onedrive-layout.md`. Seven workstream folders, 00 Admin to 06 Commercial, each with 1 Inputs, 2 Working, 3 Final |
| Logo canvas | https://claude.ai/artifact/JdqPDhibio3Z8BMa8dtuMY (rounds 1 to 7 and the kit board at the top) |
| Claude docs | Accountant brief, accountant agenda, Stage 0 site onboarding doc. Links in `docs/01-source-log.md` |
| Decisions | In Line Signs Supabase `decisions` table: 908f575f (SightShield shown as a supplier brand on In Line Signs material), c437334a (every SightShield file goes in BUSINESS FILES\SightShield) |

## First job on the desktop: finish the file move

These are in the repo but not in OneDrive. Copy each into the OneDrive folder shown. Do not overwrite anything already there without checking it.

| From the repo | To OneDrive `BUSINESS FILES\SightShield\` |
| --- | --- |
| `brand/templates/SightShield Document Template.dotx` | `05 Brand\3 Final\` |
| `brand/logo/sightshield-logo-carbon.png`, `sightshield-logo-white.png` | `05 Brand\3 Final\` |
| `brand/kit/` (pdf, html, svg folder, png folder; README is already there) | `05 Brand\3 Final\Logo and colour kit\` |
| `brand/logo/sightshield-logo-source-white-on-black.pdf` | `05 Brand\1 Inputs\` (Zac's Corel export, kept as the source) |

Zac may already have dragged some of these in from the attachments. Check first.

Then open the `.dotx` in Word on the PC and confirm the Barlow fonts are installed. If Word substitutes a font, install Barlow and Barlow Condensed from Google Fonts.

## Where the business stands (12 Nov 2026)

Most of `docs/03-open-items.md` was last updated on 30 Oct. Ask Zac for updates on these before planning anything:

1. **Rhani call (planned 31 Oct).** Outcome not recorded. Did the test assemblies ship? Can the trial run off site? Who owns the trial at the site? Did the contractor pack arrive? The call plan is in `docs/07-roadmap-audit.md`.
2. **ASIC registration.** Ordered 15 Oct through Beveridge Carey. Has the ACN or ABN arrived, and under which name, SightShield or Sight Shield?
3. **Insurance.** Has Zac contacted Kathie Barratt at PSC (02 6722 4300)?
4. **PPF booth wrap.** Was SightShield cut onto the booth, and with which mark?
5. **Beveridge Carey invoice.** It had not arrived on 28 Oct.

## Brand state

- The logo is Zac's working version from CorelDRAW: a shield mark with radiating rays in a rounded square, plus the SIGHT SHIELD wordmark. It is not final.
- The colours are carbon #1B1C1E, hi-vis lime #D4FF00 and concrete #C8CCCF. Lime goes on carbon only, never as text on white.
- Type (Round 2): Barlow Condensed headings in capitals, Barlow Condensed Bold spaced-capital labels, Barlow body text.
- Closest vinyls: Hexis HXS5889M Coal Black Matt for carbon and Metamark M7-122 Pale Grey for concrete. Hi-vis lime has no standard match. It needs a fluorescent film, so check a swatch with Spicers.
- Cut vinyl minimums: horizontal logo 200 mm wide, mark alone 30 mm.
- In the kit files the shield is cut cleanly out of the square. Zac's Corel master still has the shield poking above the square, hidden by the black background. Tell him if he exports a new cut file straight from Corel.
- The logo canvas has seven rounds of alternative marks. Zac chose to use his own logo for now. Round 3 "Held" read too much like the Claude logo to him.

## Next actions (from the roadmap audit, still open unless Zac says otherwise)

1. Chase Stage 0: get the site's contractor requirements in writing.
2. Call Kathie Barratt to start insurance quotes before the ACN lands.
3. Ask the AutoTriz dealer for film and adhesive SDS, and pick a second film brand for the trial.
4. Search IP Australia and check domains for both spellings of the name.
5. Write a one-page start-up budget so the personal contribution is a known figure.
6. Set up a SightShield email address and domain once the name is confirmed.

## Rules that carry over

- Run the decision skill before changing anything when Zac states a new price, cost, rule or process. Ask whether it is a standard or a one-off. Nothing is logged or changed without his yes.
- Every SightShield file is saved in `BUSINESS FILES\SightShield`, never in Mackenzie & Brown or In Line Signs folders.
- On In Line Signs material, SightShield appears as a supplier brand, like 3M, Hexis, AutoTriz and BUSHWRAPZ. The website listing waits until there is film to sell.
- Use the Word template (Round 2, rebuilt 12 Nov 2026) for any SightShield document.
- Australian spelling and no em or en dashes. Emails have no exclamation marks, emoji, markdown or sign-off, and never offer a phone call.
- Keep the estate note out of documents unless Zac asks.
- Do not invent specs, prices or site requirements. Mark anything unconfirmed.

## Housekeeping

- The repo branch has 12 commits that are not on `main`. Ask Zac whether to merge it, so the desktop clone gets everything by default.
- `CLAUDE.md` still says "Where things stand (30 Oct 2026)". Update it once Zac answers the five questions above.
