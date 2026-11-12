// SightShield Round 2 document library: the company overview's style, made reusable.
// 60/30/10 on the printed area, carbon cover with ray and lime hi-vis edge, concrete title block,
// carbon footer band. Cover text is live Word text so templates stay editable.
const fs = require('fs');
const path = require('path');
const D = require('docx');
const {
  Document, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, Header, Footer,
  AlignmentType, WidthType, ShadingType, BorderStyle, LevelFormat, HeadingLevel, PageNumber,
  VerticalAlign, TableLayoutType, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom,
  TextWrappingType, SectionType, TableAnchorType, OverlapType, HeightRule,
} = D;

const C = { carbon: '1B1C1E', lime: 'D4FF00', concrete: 'C8CCCF', muted: '5A6065', text2: '3A3C40', white: 'FFFFFF' };
const HEAD = 'Barlow Condensed', BODY = 'Barlow';
const PAGE_W = 11906, PAGE_H = 16838, MARGIN = 1134, CONTENT = PAGE_W - 2 * MARGIN;
const EMU_PX = 9525, TW_PX = 15;
const ASSETS = __dirname;

const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
const cellNone = { top: none, bottom: none, left: none, right: none };
const line = (color = C.carbon, size = 6) => ({ style: BorderStyle.SINGLE, size, color });
const t = (text, o = {}) => new TextRun({ text, font: o.font || BODY, ...o });
const p = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [t(children)], ...o });
const label = (text, color = C.text2, size = 15) => t(text.toUpperCase(), { font: HEAD, bold: true, size, color, characterSpacing: 40 });
const floatAt = (xPx, yPx) => ({ horizontalAnchor: TableAnchorType.PAGE, verticalAnchor: TableAnchorType.PAGE,
  absoluteHorizontalPosition: xPx * TW_PX, absoluteVerticalPosition: yPx * TW_PX, overlap: OverlapType.OVERLAP });

// ---------- cover ----------
// opts: bg (jpg path), ref ('SS-0002  ·  Rev A'), title, subtitle, titleSize (half-points), titleTop (px), cells [[label, value] x6]
function cover(o) {
  const bg = new ImageRun({
    type: 'jpg', data: fs.readFileSync(o.bg), transformation: { width: 794, height: 1123 },
    altText: { title: 'Cover', description: `SightShield ${o.title}`, name: 'Cover' },
    floating: {
      horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
      verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
      behindDocument: true, allowOverlap: true, wrap: { type: TextWrappingType.NONE },
    },
  });
  const TW = 554 * TW_PX;
  const titleSize = o.titleSize || 126;
  const titleBlock = new Table({
    width: { size: TW, type: WidthType.DXA }, columnWidths: [TW], layout: TableLayoutType.FIXED, borders: noBorders,
    float: floatAt(72, o.titleTop || 452),
    rows: [new TableRow({ children: [new TableCell({ width: { size: TW, type: WidthType.DXA }, borders: cellNone,
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
      children: [
        p([label(o.ref, C.concrete, 20)], { spacing: { after: 300 } }),
        p([t(o.title.toUpperCase(), { font: HEAD, size: titleSize, color: C.white })],
          { spacing: { after: 280, line: Math.round(titleSize * 10 * 0.95), lineRule: 'exact' } }),
        p([t(o.subtitle, { size: 28, color: C.concrete })], { spacing: { after: 0, line: 340 } }),
      ] })] })],
  });
  const GW = 650 * TW_PX, CW = [Math.round(GW / 3), Math.round(GW / 3), GW - 2 * Math.round(GW / 3)];
  const cell = ([lab, val], i, row) => new TableCell({ width: { size: CW[i], type: WidthType.DXA },
    borders: { top: line(C.carbon, 6), bottom: row === 1 ? line(C.carbon, 6) : none, left: i === 0 ? none : line(C.carbon, 6), right: none },
    margins: { top: 170, bottom: 170, left: i === 0 ? 0 : 180, right: 180 },
    children: [p([label(lab, C.text2, 15)], { spacing: { after: 30 } }), p([t(val, { size: 22, color: C.carbon })], { spacing: { after: 0 } })] });
  const cells = o.cells;
  const grid = new Table({
    width: { size: GW, type: WidthType.DXA }, columnWidths: CW, layout: TableLayoutType.FIXED,
    borders: { ...noBorders, top: line(C.carbon, 6), bottom: line(C.carbon, 6) },
    float: floatAt(72, 843),
    rows: [0, 1].map(r => new TableRow({ cantSplit: true, children: cells.slice(r * 3, r * 3 + 3).map((c, i) => cell(c, i, r)) })),
  });
  return [titleBlock, grid, p([bg], { spacing: { after: 0 } })];
}

// ---------- header and footer ----------
function header(docLabel, ref) {
  const HF_L = 6200, HF_R = CONTENT - HF_L;
  return new Header({ children: [new Table({
    width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [HF_L, HF_R], layout: TableLayoutType.FIXED,
    borders: { ...noBorders, bottom: line(C.carbon, 6) },
    rows: [new TableRow({ children: [
      new TableCell({ width: { size: HF_L, type: WidthType.DXA }, borders: cellNone, verticalAlign: VerticalAlign.CENTER,
        margins: { top: 0, bottom: 120, left: 0, right: 0 },
        children: [p([new ImageRun({ type: 'png', data: fs.readFileSync(path.join(ASSETS, 'mark-carbon.png')), transformation: { width: 22, height: 22 },
          altText: { title: 'SightShield mark', description: 'SightShield mark', name: 'Mark' } }), t('   '), label(docLabel, C.carbon, 16)], { spacing: { after: 0 } })] }),
      new TableCell({ width: { size: HF_R, type: WidthType.DXA }, borders: cellNone, verticalAlign: VerticalAlign.CENTER,
        margins: { top: 0, bottom: 120, left: 0, right: 0 },
        children: [p([label(ref, C.muted, 16)], { alignment: AlignmentType.RIGHT, spacing: { after: 0 } })] }),
    ] })],
  })] });
}
function footer() {
  const BAND_H = 112;
  const band = new ImageRun({
    type: 'jpg', data: fs.readFileSync(path.join(ASSETS, 'band.jpg')), transformation: { width: 794, height: BAND_H },
    altText: { title: 'Footer band', description: 'SightShield footer band', name: 'Footer band' },
    floating: {
      horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
      verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: Math.round((1123 - BAND_H) * EMU_PX) },
      behindDocument: true, allowOverlap: true, wrap: { type: TextWrappingType.NONE },
    },
  });
  const FL = 7000, FR = CONTENT - FL;
  const fsmall = { font: HEAD, bold: true, size: 15, characterSpacing: 40 };
  return new Footer({ children: [
    p([band], { spacing: { after: 0, line: 20, lineRule: 'exact' } }),
    new Table({
      width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [FL, FR], layout: TableLayoutType.FIXED, borders: noBorders,
      rows: [new TableRow({ children: [
        new TableCell({ width: { size: FL, type: WidthType.DXA }, borders: cellNone, margins: { top: 0, bottom: 0, left: 0, right: 0 },
          children: [p([t('SIGHTSHIELD PTY LTD  ·  ABN 32 703 567 551  ·  MOREE NSW', { ...fsmall, color: C.concrete })], { spacing: { after: 0 } })] }),
        new TableCell({ width: { size: FR, type: WidthType.DXA }, borders: cellNone, margins: { top: 0, bottom: 0, left: 0, right: 0 },
          children: [p([t('SHEET ', { ...fsmall, color: C.carbon }), new TextRun({ ...fsmall, color: C.carbon, children: [PageNumber.CURRENT] }),
            t(' / ', { ...fsmall, color: C.carbon }), new TextRun({ ...fsmall, color: C.carbon, children: [PageNumber.TOTAL_PAGES] })],
            { alignment: AlignmentType.RIGHT, spacing: { after: 0 } })] }),
      ] })],
    }),
  ] });
}

// ---------- body blocks ----------
let sec = 0;
const H1 = (text, o = {}) => { sec += 1; return new Paragraph({ heading: HeadingLevel.HEADING_1, ...o, children: [
  t(String(sec).padStart(2, '0') + '   ', { font: HEAD, size: 40, color: C.muted }), t(text.toUpperCase(), { font: HEAD, size: 40 })] }); };
const H2 = (text, o = {}) => new Paragraph({ heading: HeadingLevel.HEADING_2, ...o, children: [t(text.toUpperCase(), { font: HEAD, bold: true, size: 24, characterSpacing: 20 })] });
const body = (text, color = C.carbon, o = {}) => p([t(text, { color })], o);
const bullet = (text, o = {}) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, ...o, children: [t(text)] });
const check = (text) => new Paragraph({ indent: { left: 400, hanging: 400 }, spacing: { after: 100 }, tabStops: [{ type: 'left', position: 400 }],
  children: [t('☐', { font: 'Segoe UI Symbol', size: 22, color: C.carbon }), t('\t'), t(text)] });
const lead = (head, text, o = {}) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, ...o, children: [t(head + '  ', { font: HEAD, bold: true, size: 21, allCaps: true, characterSpacing: 20 }), t(text)] });
let stepN = 0;
const resetSteps = () => { stepN = 0; };
const step = (text, o = {}) => { stepN += 1; return new Paragraph({ indent: { left: 400, hanging: 400 }, spacing: { after: 100 }, ...o,
  children: [t(String(stepN), { font: HEAD, bold: true, size: 22 }), t('\t'), t(text)], tabStops: [{ type: 'left', position: 400 }] }); };
const gap = (after = 200) => p([t('')], { spacing: { after, line: 240, lineRule: 'auto' } });
const box = (fill, leftBorder, children, m = { top: 220, bottom: 220, left: 300, right: 300 }) => new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [CONTENT], borders: noBorders, layout: TableLayoutType.FIXED,
  rows: [new TableRow({ cantSplit: true, children: [new TableCell({
    width: { size: CONTENT, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill },
    borders: { top: none, right: none, bottom: none, left: leftBorder || none }, margins: m, children,
  })] })],
});
const note = (lab, text) => box(C.concrete, line(C.carbon, 32), [
  p([label(lab, C.text2, 15)], { spacing: { after: 60 } }), p([t(text, { size: 20 })], { spacing: { after: 0 } })]);
const carbonBox = (lab, text) => box(C.carbon, null, [
  p([label(lab, C.lime, 16)], { spacing: { after: 80 } }),
  p([t(text, { font: HEAD, size: 30, color: C.white, allCaps: true })], { spacing: { after: 0, line: 300 } }),
], { top: 300, bottom: 300, left: 340, right: 340 });

// data table: carbon header row (repeats), concrete row rules, carbon closing rule. firstBold sets column 1 in condensed caps.
function table(heads, rows, widths, firstBold = true) {
  const W = widths || heads.map(() => Math.floor(CONTENT / heads.length));
  const th = (text, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.carbon },
    borders: cellNone, margins: { top: 120, bottom: 120, left: 160, right: 160 }, children: [p([label(text, C.white, 16)], { spacing: { after: 0 } })] });
  const td = (text, w, last, first) => new TableCell({ width: { size: w, type: WidthType.DXA },
    borders: { top: none, left: none, right: none, bottom: last ? line(C.carbon, 12) : line(C.concrete, 4) },
    margins: { top: 90, bottom: 90, left: 160, right: 160 },
    children: [p([first && firstBold ? t(text, { font: HEAD, bold: true, size: 21, allCaps: true, characterSpacing: 10 }) : t(text, { size: 20, color: C.text2 })], { spacing: { after: 0 } })] });
  return new Table({
    width: { size: W.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: W, borders: noBorders, layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({ tableHeader: true, children: heads.map((h, i) => th(h, W[i])) }),
      ...rows.map((r, ri) => new TableRow({ cantSplit: true, children: r.map((v, i) => td(v, W[i], ri === rows.length - 1, i === 0)) })),
    ],
  });
}

// concrete title block: [[label, value, width]...]
function titleBlock(cells) {
  const W = cells.map(c => c[2]);
  return new Table({
    width: { size: CONTENT, type: WidthType.DXA }, columnWidths: W, layout: TableLayoutType.FIXED,
    borders: { ...noBorders, top: line(C.carbon, 16) },
    rows: [new TableRow({ cantSplit: true, children: cells.map(([lab, val, w], i) => new TableCell({ width: { size: w, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.concrete },
      borders: { top: none, bottom: none, left: none, right: i === cells.length - 1 ? none : line(C.white, 8) },
      margins: { top: 140, bottom: 160, left: 180, right: 180 },
      children: [p([label(lab, C.text2, 14)], { spacing: { after: 20 } }), p([t(val, { size: 20 })], { spacing: { after: 0 } })] })) })],
  });
}
const contact = () => titleBlock([['Contact', 'Zac Mackenzie, Director', 3000], ['T', '0491 709 002', 1900], ['E', 'zac@sightshield.com.au', 2800], ['L', 'Moree NSW', CONTENT - 7700]]);

function document(o) {
  return new Document({
    creator: 'SightShield Pty Ltd', title: o.title, description: o.description || '',
    styles: {
      default: { document: { run: { font: BODY, size: 21, color: C.carbon }, paragraph: { spacing: { after: 140, line: 300 } } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: HEAD, size: 40, color: C.carbon },
          paragraph: { spacing: { before: 480, after: 160, line: 240, lineRule: 'auto' }, keepNext: true, keepLines: true, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: HEAD, bold: true, size: 24, color: C.carbon, characterSpacing: 20, allCaps: true },
          paragraph: { spacing: { before: 280, after: 100, line: 240, lineRule: 'auto' }, keepNext: true, keepLines: true, outlineLevel: 1 } },
      ],
    },
    numbering: { config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '■', alignment: AlignmentType.LEFT,
        style: { run: { color: C.carbon, size: 12 }, paragraph: { indent: { left: 400, hanging: 300 }, spacing: { after: 100 } } } }] },
    ] },
    sections: [
      { properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 0, bottom: 0, left: 0, right: 0, header: 0, footer: 0 } } },
        children: cover(o.cover) },
      { properties: { type: SectionType.NEXT_PAGE, page: { size: { width: PAGE_W, height: PAGE_H },
          margin: { top: 1500, bottom: 2300, left: MARGIN, right: MARGIN, header: 760, footer: 520 } } },
        headers: { default: header(o.headerLabel, o.headerRef) }, footers: { default: footer() },
        children: [...o.children, p([t('', { size: 2 })], { spacing: { before: 0, after: 0, line: 20, lineRule: 'exact' } })] },
    ],
  });
}

module.exports = { D, C, HEAD, BODY, CONTENT, t, p, label, H1, H2, body, bullet, check, lead, step, resetSteps, gap, box, note, carbonBox, table, titleBlock, contact, document };
