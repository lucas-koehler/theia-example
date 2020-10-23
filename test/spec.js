const Application = require('spectron').Application
const assert = require('assert')
const path = require('path')

describe('Application launch', function () {
  this.timeout(60000)

  beforeEach(function () {
    
    this.app = new Application({
      path: path.join(__dirname, "../dist", "linux-unpacked", "resources", "app", "node_modules", "electron", "dist", "electron"),

      startTimeout: 30000,
      connectionRetryTimeout: 30000,

      // chromeDriverLogPath: '/home/johannes/Git/theia-example/chromedriverlog.txt',
      // webdriverLogPath: '/home/johannes/Git/theia-example/webdriverlogs',

      chromeDriverArgs: [
        "--log-level=\"trace\""
      ],

      args: [
        path.join(__dirname, "../dist", "linux-unpacked", "resources", "app", "src-gen", "frontend", "electron-main.js")
      ]
    })
    return this.app.start()
      .catch(console.error)
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    })
  })
})