const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, Header, Footer,
  AlignmentType, WidthType, ShadingType, BorderStyle, LevelFormat, HeadingLevel, PageNumber,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader, VerticalAlign, TableLayoutType
} = require('docx');

const C = { carbon: '1B1C1E', lime: 'D4FF00', concrete: 'C8CCCF', mist: 'EEF0F1', muted: '5A6065', white: 'FFFFFF' };
const HEAD = 'Barlow Condensed', BODY = 'Barlow';
const PAGE_W = 11906, MARGIN = 1134, CONTENT = PAGE_W - 2 * MARGIN; // A4, 20 mm margins
const LOGO_RATIO = 4465 / 608;

const logoCarbon = fs.readFileSync('emb-carbon.png');
const logoWhite = fs.readFileSync('emb-white.png');

const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
const cellNone = { top: none, bottom: none, left: none, right: none };

const t = (text, o = {}) => new TextRun({ text, font: o.font || BODY, ...o });
const p = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [t(children)], ...o });

// ---------- cover block ----------
const cover = new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [CONTENT], borders: noBorders, layout: TableLayoutType.FIXED,
  rows: [
    new TableRow({ children: [new TableCell({
      width: { size: CONTENT, type: WidthType.DXA }, borders: cellNone,
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.carbon },
      margins: { top: 560, bottom: 520, left: 560, right: 560 },
      children: [
        p([new ImageRun({ type: 'png', data: logoWhite, transformation: { width: 300, height: Math.round(300 / LOGO_RATIO) },
          altText: { title: 'SightShield', description: 'SightShield logo', name: 'SightShield logo' } })], { spacing: { before: 0, after: 560, line: 240, lineRule: 'auto' } }),
        p([t('[DOCUMENT TITLE]', { font: HEAD, bold: true, size: 60, color: C.white })], { spacing: { after: 80 } }),
        p([t('[One line on what this document is and who it is for]', { size: 26, color: C.lime })], { spacing: { after: 280 } }),
        p([t('Prepared by Zac Mackenzie  ·  [DATE]', { size: 19, color: C.concrete })], { spacing: { after: 0 } }),
      ],
    })] }),
    new TableRow({ height: { value: 110, rule: 'exact' }, children: [new TableCell({
      width: { size: CONTENT, type: WidthType.DXA }, borders: cellNone,
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.lime }, children: [p([t('', { size: 2 })])],
    })] }),
  ],
});

// ---------- document details ----------
const DW = [1650, 3350, 1500, CONTENT - 6500];
const detailCell = (text, label, col) => new TableCell({
  width: { size: DW[col], type: WidthType.DXA },
  borders: { top: none, left: none, right: none, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.concrete } },
  margins: { top: 100, bottom: 100, left: 0, right: 160 },
  children: [p([label ? t(text.toUpperCase(), { size: 16, bold: true, color: C.muted, characterSpacing: 30 }) : t(text, { size: 21 })])],
});
const details = new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: DW, borders: noBorders, layout: TableLayoutType.FIXED,
  rows: [
    ['Prepared for', '[Name, company]', 'Reference', 'SS-[0000]'],
    ['Prepared by', 'Zac Mackenzie, SightShield Pty Ltd', 'Date', '[DATE]'],
  ].map(r => new TableRow({ children: r.map((v, i) => detailCell(v, i % 2 === 0, i)) })),
});

// ---------- data table ----------
const W4 = [2600, 3838, 1600, 1600];
const hdr = (text, w) => new TableCell({
  width: { size: w, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.carbon },
  borders: { top: { style: BorderStyle.SINGLE, size: 4, color: C.carbon }, left: { style: BorderStyle.SINGLE, size: 4, color: C.carbon }, right: { style: BorderStyle.SINGLE, size: 4, color: C.carbon }, bottom: { style: BorderStyle.SINGLE, size: 18, color: C.lime } },
  margins: { top: 110, bottom: 110, left: 140, right: 140 },
  children: [p([t(text, { font: HEAD, bold: true, size: 20, color: C.white })])],
});
const cell = (text, w, shade) => new TableCell({
  width: { size: w, type: WidthType.DXA }, shading: shade ? { type: ShadingType.CLEAR, color: 'auto', fill: C.mist } : undefined,
  borders: { top: none, left: none, right: none, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.concrete } },
  margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [p([t(text, { size: 20 })])],
});
const dataTable = new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: W4, borders: noBorders, layout: TableLayoutType.FIXED,
  rows: [
    new TableRow({ tableHeader: true, children: ['Item', 'Detail', 'Owner', 'Due'].map((h, i) => hdr(h, W4[i])) }),
    ...[['[Item]', '[What it is or what is needed]', '[Name]', '[DATE]'],
        ['[Item]', '[What it is or what is needed]', '[Name]', '[DATE]'],
        ['[Item]', '[What it is or what is needed]', '[Name]', '[DATE]']]
      .map((r, ri) => new TableRow({ children: r.map((v, i) => cell(v, W4[i], ri % 2 === 1)) })),
  ],
});

// ---------- callout ----------
const callout = new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [CONTENT], borders: noBorders, layout: TableLayoutType.FIXED,
  rows: [new TableRow({ children: [new TableCell({
    width: { size: CONTENT, type: WidthType.DXA }, borders: cellNone,
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: C.mist },
    margins: { top: 200, bottom: 200, left: 280, right: 280 },
    children: [
      p([t('NOTE', { font: HEAD, bold: true, size: 18, color: C.muted, characterSpacing: 40 })], { spacing: { after: 60 } }),
      p([t('[Use this box for one thing the reader must not miss: a deadline, a condition or a decision needed.]', { size: 21 })]),
    ],
  })] })],
});

const H1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(text, { font: HEAD })] });
const H2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(text, { font: HEAD })] });
const body = (text) => p([t(text)]);
const bullet = (text) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children: [t(text)] });
const step = (text) => new Paragraph({ numbering: { reference: 'steps', level: 0 }, children: [t(text)] });
const gap = (after = 240) => p([t('')], { spacing: { after } });

// ---------- header / footer ----------
const HF_L = 6200, HF_R = CONTENT - HF_L;
const hfTable = (left, right, edge) => new Table({
  width: { size: CONTENT, type: WidthType.DXA }, columnWidths: [HF_L, HF_R], layout: TableLayoutType.FIXED,
  borders: { ...noBorders, ...edge },
  rows: [new TableRow({ children: [
    new TableCell({ width: { size: HF_L, type: WidthType.DXA }, borders: cellNone, verticalAlign: VerticalAlign.CENTER,
      margins: { top: 0, bottom: 0, left: 0, right: 0 }, children: [left] }),
    new TableCell({ width: { size: HF_R, type: WidthType.DXA }, borders: cellNone, verticalAlign: VerticalAlign.CENTER,
      margins: { top: 0, bottom: 0, left: 0, right: 0 }, children: [right] }),
  ] })],
});
const small = { size: 15, color: C.muted };
const header = new Header({ children: [
  hfTable(
    new Paragraph({ spacing: { before: 60, after: 120, line: 240, lineRule: 'auto' }, children: [new ImageRun({ type: 'png', data: logoCarbon,
      transformation: { width: 150, height: Math.round(150 / LOGO_RATIO) },
      altText: { title: 'SightShield', description: 'SightShield logo', name: 'SightShield logo' } })] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { after: 100 }, children: [t('[DOCUMENT TITLE]', { size: 16, color: C.muted })] }),
    { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.carbon } }),
  p([t('', { size: 4 })], { spacing: { after: 0 } }),
] });
const footer = new Footer({ children: [
  hfTable(
    new Paragraph({ style: 'SSFooter', spacing: { before: 100, after: 0 }, children: [t('SightShield Pty Ltd  ·  ABN 32 703 567 551  ·  Moree NSW  ·  0491 709 002', small)] }),
    new Paragraph({ style: 'SSFooter', alignment: AlignmentType.RIGHT, spacing: { before: 100, after: 0 }, children: [
      t('Page ', small), new TextRun({ font: BODY, ...small, children: [PageNumber.CURRENT] }),
      t(' of ', small), new TextRun({ font: BODY, ...small, children: [PageNumber.TOTAL_PAGES] }) ] }),
    { top: { style: BorderStyle.SINGLE, size: 4, color: C.concrete } }),
] });

const doc = new Document({
  creator: 'SightShield Pty Ltd', title: 'SightShield document template', description: 'Branded SightShield document template',
  styles: {
    default: { document: { run: { font: BODY, size: 21, color: C.carbon }, paragraph: { spacing: { after: 140, line: 288 } } } },
    paragraphStyles: [
      { id: 'SSFooter', name: 'SightShield Footer', basedOn: 'Normal', run: { font: BODY, size: 15, color: C.muted }, paragraph: { spacing: { after: 0 } } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: HEAD, size: 40, bold: true, color: C.carbon },
        paragraph: { spacing: { before: 440, after: 140 }, keepNext: true, keepLines: true, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: HEAD, size: 28, bold: true, color: C.carbon },
        paragraph: { spacing: { before: 280, after: 100 }, keepNext: true, keepLines: true, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: HEAD, size: 22, bold: true, color: C.muted, allCaps: true, characterSpacing: 30 },
        paragraph: { spacing: { before: 220, after: 80 }, keepNext: true, keepLines: true, outlineLevel: 2 } },
    ],
  },
  numbering: { config: [
    { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '■', alignment: AlignmentType.LEFT,
      style: { run: { color: C.carbon, size: 14 }, paragraph: { indent: { left: 400, hanging: 280 }, spacing: { after: 80 } } } }] },
    { reference: 'steps', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
      style: { run: { font: HEAD, bold: true, color: C.carbon }, paragraph: { indent: { left: 400, hanging: 400 }, spacing: { after: 80 } } } }] },
  ] },
  sections: [{
    properties: { titlePage: true, page: { size: { width: PAGE_W, height: 16838 },
      margin: { top: 1300, bottom: 1200, left: MARGIN, right: MARGIN, header: 560, footer: 560 } } },
    headers: { default: header, first: new Header({ children: [p([t('')])] }) },
    footers: { default: footer, first: footer },
    children: [
      cover, gap(360), details, gap(120),
      H1('Purpose'),
      body('[One or two sentences on what this document is for and what you need from the reader. Lead with the answer or the ask.]'),
      H1('Background'),
      body('[Short paragraphs, three sentences at most. Plain words, Australian spelling, no em dashes.]'),
      H2('Subheading'),
      body('[Use a subheading when a section has more than one part.]'),
      bullet('[A point]'), bullet('[A point]'), bullet('[A point]'),
      H1('Details'),
      body('[Introduce the table in one sentence.]'),
      dataTable, gap(240),
      callout,
      H1('Next steps'),
      step('[First action, who does it and by when]'),
      step('[Second action]'),
      step('[Third action]'),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync('SightShield Document Template.docx', buf); console.log('written', buf.length); });
