const { chromium } = require('playwright');
(async () => {
  const [src, pdf, png] = process.argv.slice(2);
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1123, height: 794 } });
  await pg.goto('file://' + src, { waitUntil: 'load', timeout: 20000 }).catch(e => console.log('load note', e.message));
  await pg.waitForTimeout(800);
  await pg.pdf({ path: pdf, format: 'A4', landscape: true, printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
