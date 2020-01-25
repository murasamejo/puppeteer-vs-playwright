const puppeteer = require('puppeteer');
// const iPhone = puppeteer.devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // await page.emulate(iPhone);
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({
    path: 'my_screenshot.png',
    fullPage: true,
  });

  await browser.close();
})();
