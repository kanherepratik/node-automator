var chromedriver = require('chromedriver');
module.exports = {
  Demo : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('input[name=btnK]', 3000)
      .click('input[name=btnK]')
      .pause(1000)
      .saveScreenshot('screenshots/google.png')
      .end()
  }
};