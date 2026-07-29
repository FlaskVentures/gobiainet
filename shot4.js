const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:8833/studio/', { waitUntil: 'networkidle' });
  const el = await page.locator('#work');
  await el.screenshot({ path: '/home/claude/shot4-work.png' });
  await browser.close();
})();
