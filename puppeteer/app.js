const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.google.co.jp/");
  await page.screenshot({
    path: "my_screenshot.png",
    fullPage: true
  });

  await browser.close();
})();
