// SightShield Word template, Round 2 refined (same style as the company overview)
const fs = require('fs');
const L = require('./r2lib');
const { C, t, p, H1, H2, body, bullet, step, note, table, contact, gap, CONTENT } = L;

const doc = L.document({
  title: 'SightShield document template',
  description: 'SightShield Round 2 document template',
  headerLabel: '[Document title]', headerRef: 'SS-[0000]  ·  Rev [A]',
  cover: {
    bg: 'coverbg-template.jpg', ref: 'SS-[0000]  ·  Rev [A]', title: '[Document title]',
    subtitle: '[One line on what this document is and who it is for]', titleSize: 104,
    cells: [['Prepared for', '[Name, company]'], ['Prepared by', 'Zac Mackenzie, Director'], ['Status', '[Draft]'],
            ['Date', '[DD Mon YYYY]'], ['Revision', '[A]'], ['Sheets', '[0]']],
  },
  children: [
    H1('Purpose', { spacing: { before: 120, after: 160 } }),
    p([t('[One or two sentences on what this document is for and what you need from the reader. Lead with the answer or the ask.]', { size: 24 })], { spacing: { after: 140, line: 320 } }),
    H1('Background'),
    body('[Short paragraphs, three sentences at most. Plain words, Australian spelling, no em dashes.]', C.text2),
    H2('Subheading for a section with more than one part'),
        bullet('[A point]'), bullet('[Another point]'),
    H1('Details'),
    body('[Introduce the table in one sentence.]', C.text2),
    table(['Item', 'Detail', 'Owner', 'Due'], [
      ['[Item]', '[What it is or what is needed]', '[Name]', '[Date]'],
      ['[Item]', '[What it is or what is needed]', '[Name]', '[Date]'],
      ['[Item]', '[What it is or what is needed]', '[Name]', '[Date]'],
    ], [2400, 4038, 1600, 1600]),
    gap(60),
    note('Note 03.1', '[Use this box for one thing the reader must not miss: a deadline, a condition or a decision needed.]'),
    H1('Next steps'),
    step('[First action, who does it and by when]'), step('[Second action]'), step('[Third action]'),
    contact(),
  ],
});
L.D.Packer.toBuffer(doc).then(buf => { fs.writeFileSync('SightShield Document Template.docx', buf); console.log('written', buf.length); });
