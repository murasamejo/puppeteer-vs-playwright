# Puppeteer vs. Playwright
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Playwright](https://github.com/microsoft/playwright)

# Playwright は、インストール時に各種ブラウザエンジンを自動でインストールしてくれる
- [Playwright automatically downloads browser executables during installation, see Downloaded browsers for more information.](https://github.com/microsoft/playwright/blob/master/docs/api.md#playwright-module)

> Playwright automatically downloads browser executables during installation, see Downloaded browsers for more information.
>
> playwright.chromium
> playwright.devices
> playwright.errors
> playwright.firefox
> playwright.webkit

# Note
- コミッターを見ると分かるように、双方の開発者は共通していることが多い
  - [README にもその旨の記載がある](https://github.com/microsoft/playwright#faq)

> Q: How does Playwright relate to Puppeteer?
>
> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer project > is active and is maintained by Google.
>
> We are the same team that built Puppeteer. Puppeteer proved that there is a lot of interest in the new generation of ever-green, > capable and reliable automation drivers. With Playwright, we'd like to take it one step further and offer the same functionality for > all the popular rendering engines. We'd like to see Playwright vendor-neutral and shared governed.
>
> With Playwright, we are making the APIs more testing-friendly as well. We are taking the lessons learned from Puppeteer and incorporate > them into the API, for example, user agent / device emulation is set up consistently on the BrowserContext level to enable multi-page > scenarios, click waits for the element to be available and visible by default, there is a way to wait for network and other events, etc.
>
> Playwright also aims at being cloud-native. Rather than a single page, BrowserContext abstraction is now central to the library > operation. BrowserContexts are isolated, they can be either created locally or provided as a service.
>
> All the changes and improvements above would require breaking changes to the Puppeteer API, so we chose to start with a clean slate instead. Due to the similarity of the concepts and the APIs, migration between the two should be a mechanical task.

# （参考）ブラウザエンジンごとの差異があるサイト
- [PureCSS Lace](https://diana-adrianne.com/purecss-lace/)
  - [表示するブラウザごとに違う見え方をする「コードで描かれた絵」とは？ - GIGAZINE](https://gigazine.net/news/20191106-purecss-image-looks-different-browser/)

# （参考）用いることができるデバイスの一覧
- 使い方は[公式ドキュメント](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerdevices)の通り
- 指定することができるデバイス名の文字列は `lib/DeviceDescriptors.js` に書かれている
  - https://github.com/puppeteer/puppeteer/blob/master/lib/DeviceDescriptors.js
  - ローカルに落としてきたファイル (f47ed1649cba462c8c509a5446075956acfabcc9) は [こちら](puppeteer/DeviceDescriptors.js)
- 一覧を取得するためには、以下のコマンドを実行すればいい

```bash
$ cat DeviceDescriptors.js | grep name:
```

- 上記のコマンドの実行結果は [DeviceNames.txt](puppeteer/DeviceNames.txt) に置いてある
- JavaScript 上で扱いやすいように、[deviceNames.js](puppeteer/deviceNames.js) という形でも置いてある
- `const devices = require("puppeteer/DeviceDescriptors");` のような指定の方法は[旧バージョン用](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerdevices)である
