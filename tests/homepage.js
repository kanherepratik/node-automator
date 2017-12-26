var chromedriver = require('chromedriver');
module.exports = {
  Demo : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .saveScreenshot('google.png')
      .end()
  }
};
