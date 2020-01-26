const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage(
      'https://diana-adrianne.com/purecss-lace/'
    );

    await page.screenshot({
      path: `example-${browserType}.png`,
      fullPage: true,
    });

    await browser.close();
  }
})();
