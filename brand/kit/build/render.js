const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const [dir, out, file, bg, width] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({ deviceScaleFactor: 1 });
  const svg = fs.readFileSync(path.join(dir, file), 'utf8');
  const vb = svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
  const W = +width, H = Math.round(W * vb[3] / vb[2]);
  await pg.setViewportSize({ width: W, height: H });
  await pg.setContent(`<html><body style="margin:0;background:${bg}">${svg.replace(/width="[^"]+" height="[^"]+"/, `width="${W}" height="${H}"`)}</body></html>`);
  await pg.screenshot({ path: out, omitBackground: bg === 'transparent', clip: { x: 0, y: 0, width: W, height: H } });
  await b.close();
})();
