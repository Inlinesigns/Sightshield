// Accountant meeting agenda (9 Oct 2026), rebuilt in the Round 2 style. Content as written on the day.
const fs = require('fs');
const L = require('./r2lib');
const { C, t, p, H1, body, bullet, check, step, resetSteps, table, note, gap, CONTENT } = L;

const qs = (arr) => { resetSteps(); return arr.map(x => step(x)); };

const doc = L.document({
  title: 'SightShield accountant meeting agenda',
  description: 'Agenda for the meeting with Beveridge Carey on company setup and ownership structure, 9 Oct 2026',
  headerLabel: 'Accountant meeting agenda', headerRef: 'SS-0002  ·  Rev A',
  cover: {
    bg: 'coverbg-agenda.jpg', ref: 'SS-0002  ·  Rev A', title: 'Accountant meeting agenda', titleSize: 96, titleTop: 400,
    subtitle: 'Company setup and ownership structure, with Tania Gray at Beveridge Carey.',
    cells: [['Prepared for', 'Tania Gray, Beveridge Carey'], ['Prepared by', 'Zac Mackenzie, Director'], ['Status', 'Agenda, as written'],
            ['Date', '9 Oct 2026'], ['Revision', 'A'], ['Sheets', '6']],
  },
  children: [
    H1('Meeting details', { spacing: { before: 120, after: 160 } }),
    table(['Item', 'Detail'], [
      ['Subject', 'SightShield Pty Ltd: company setup and ownership structure'],
      ['Date and time', 'TBC'],
      ['Location', 'TBC'],
      ['Attendees', 'Zac Mackenzie (founder); Tania Gray (Beveridge Carey)'],
      ['Prepared by', 'Zac Mackenzie'],
    ], [2600, CONTENT - 2600]),
    note('Note 01.1', 'This agenda is kept as written on 9 Oct 2026. Some items have moved on since: the company is now registered (ABN 32 703 567 551).'),

    H1('Agenda at a glance'),
    table(['No.', 'Item', 'Outcome needed'], [
      ['1', 'Ownership structure', 'Decision on trust, subsidiary or personal ownership'],
      ['2', 'Company registration', 'Who lodges, in what order, and by when'],
      ['3', 'Banking and bookkeeping', 'Setup plan, kept separate from In Line Signs'],
      ['4', 'Funding and dealings with In Line Signs', 'How money goes in and how cross-charges are recorded'],
      ['5', 'Insurance, payroll and workers comp', 'Requirements for mine-site work confirmed'],
      ['6', 'R&D tax incentive and tax planning', 'View on eligibility and records to keep'],
      ['7', 'What to bring and next steps', 'Actions, fee estimate, follow-up date'],
    ], [900, 3900, CONTENT - 4800]),

    H1('Purpose and outcomes'),
    body("The meeting needs to settle who owns SightShield and how it's set up, so the company can be registered and site contractor onboarding can start. The Tier 1 trial is blocked until the company exists.", C.text2),
    body('By the end of the meeting we want:', C.text2, { keepNext: true }),
    ...qs([
      "A decision on the ownership structure (or a clear list of what's needed to decide).",
      'Agreement on who registers the company and entities, and by when.',
      'A plan for banking, bookkeeping and keeping SightShield fully separate from In Line Signs.',
      'Advice on how to fund the start-up and record money moving between the businesses.',
      'A view on R&D tax incentive eligibility for the trial and cleaner work.',
      'A fee estimate for setup and ongoing work.',
    ]),

    H1('Ownership structure (decision first)'),
    body('Leaning towards a trust that owns both Mackenzie & Brown Co Pty Ltd and SightShield Pty Ltd as separate companies. The full background is in the earlier accountant brief on ownership structure.', C.text2),
    table(['Option', 'What it looks like'], [
      ['A. Trust owns both (preferred)', 'Family trust holds shares in Mackenzie & Brown and SightShield'],
      ['B. Subsidiary', 'Mackenzie & Brown owns SightShield'],
      ['C. Personal', 'Zac owns SightShield shares directly'],
    ], [3600, CONTENT - 3600]),
    gap(120),
    body('Questions:', C.text2, { keepNext: true }),
    ...qs([
      'What are the CGT and rollover implications of moving the Mackenzie & Brown shares into the trust? Or should only SightShield sit under it?',
      'Discretionary trust with a corporate trustee, or something else?',
      "Is a bucket company needed from day one, or later once there's profit?",
      'Can the trust deed let a future manager get a profit share or equity in SightShield without touching In Line Signs?',
      'Which option best protects In Line Signs if SightShield has a warranty or liability claim on a mine site?',
      'Setup and yearly running cost of each option (deed, trustee company, extra tax returns).',
    ]),

    H1('Company registration'),
    body('Plan is to register SightShield Pty Ltd as its own company, not a business name under Mackenzie & Brown. The name still needs checking on ASIC and IP Australia.', C.text2),
    ...qs([
      'Who lodges the ASIC registration: the accountant or Zac?',
      'Directors and shareholders: who holds what, based on the structure chosen above.',
      "Constitution: standard or custom? Does it need anything for a future manager's equity?",
      "Registered office and principal place of business: the accountant's office or Moree?",
      'ABN and TFN: applied for at registration?',
      'GST: register from day one, even before turnover hits the threshold, so GST on film and equipment can be claimed?',
      "Director ID: does Zac's existing one cover a second company? (Confirm.)",
      'Trademark: does the accountant handle it, or refer to someone for IP Australia?',
      'Order of events: trust deed first, then company, then bank? Rough time to complete.',
    ]),

    H1('Banking and bookkeeping'),
    body('SightShield has to run on its own systems so it can be handed to a manager later.', C.text2),
    ...qs([
      'Separate business bank account and card: any bank the accountant recommends for a second entity?',
      'Accounting software: a separate file for SightShield, and which package suits handover to a manager?',
      'Chart of accounts set up to track the trial, R&D and cleaner development costs separately.',
      'BAS: quarterly or monthly? Who lodges?',
      'Year-end financials and tax return: what the accountant does versus what Zac does.',
      'How to keep receipts and records so a mine-site client audit or R&D claim is easy to support.',
    ]),

    H1('Funding and dealings with In Line Signs'),
    body('SightShield will need cash before it earns anything: film stock, insurances, prequalification fees, safety documentation from On Point Safety, and trial costs.', C.text2),
    ...qs([
      'Best way to put money in: a loan from Zac, a loan from Mackenzie & Brown or the trust, or share capital?',
      'Division 7A or other traps on loans between the companies, the trust and Zac.',
      "Zac's time and In Line Signs tools, vehicle and shop space used on SightShield work: charge it across, and at what rate?",
      "Intercompany invoicing: what paperwork is needed so each entity's books stay clean?",
      'Can start-up costs paid before registration be claimed by SightShield once it exists?',
      'Grants or low-cost finance worth considering for the start-up.',
    ]),

    H1('Insurance, payroll and workers comp'),
    body("Mine-site prequalification will ask for proof of public liability, product liability and workers comp cover in SightShield's name.", C.text2),
    ...qs([
      "Does Zac need to be on SightShield's payroll to be covered for workers comp when installing on site?",
      "If Zac works unpaid as a director at first, how does that affect workers comp and the site's requirements?",
      'Payroll setup: Single Touch Payroll, super, PAYG withholding, and when it needs to be in place.',
      'Contractors vs employees for future installers.',
      'Can the accountant refer an insurance broker who knows mining contractor minimums?',
      'Insurance premiums: paid by SightShield from day one, or funded through the loan above?',
    ]),

    H1('R&D tax incentive, grants and tax planning'),
    body('The trial (film durability under 6x daily cleaning and coal dust, two film brands side by side) and the mine-site-safe cleaner formulation may count as R&D. The structure chosen affects whether SightShield can claim.', C.text2),
    ...qs([
      'Is the trial and cleaner work likely to qualify for the R&D tax incentive?',
      'Does the company need to exist before the R&D starts for costs to count?',
      'What records to keep from day one: hypotheses, test plans, results, timesheets.',
      'Minimum spend, and whether working with a research provider changes that.',
      'Does the accountant handle R&D claims, or refer to a specialist?',
      'Any grants that suit a new regional business developing a safety product.',
      'Financial year: start on a standard 30 June year-end?',
      'Expected losses in the first year: can they be used, and does the structure affect that?',
    ]),

    H1('What to bring and next steps'),
    body('Bring:', C.text2, { keepNext: true }),
    check('The earlier accountant brief on ownership structure'),
    check('Mackenzie & Brown Co Pty Ltd details (ABN 24 689 202 560) and current shareholding'),
    check("Zac's director ID"),
    check('Rough start-up cost list: film, insurances, prequalification, safety documentation, trial'),
    check('Timeline: trial as soon as the company is accepted as a site contractor; fully operational and certified by mid-2028'),
    body('To agree before leaving:', C.text2, { keepNext: true, spacing: { before: 200 } }),
    check("Ownership structure decided, or what's still needed to decide"),
    check('Who does each registration step, and target dates'),
    check('Broker and R&D specialist referrals, if needed'),
    check('Fee estimate for setup and ongoing accounting'),
    check('Date for a follow-up'),

    H1('Decisions and actions'),
    body('To be filled in during the meeting.', C.text2),
    table(['No.', 'Decision or action', 'Owner', 'Due'], [1, 2, 3, 4, 5, 6, 7].map(n => [String(n), '', '', '']), [900, CONTENT - 3900, 1600, 1400]),
  ],
});
L.D.Packer.toBuffer(doc).then(buf => { fs.writeFileSync('SightShield accountant meeting agenda.docx', buf); console.log('written', buf.length); });
