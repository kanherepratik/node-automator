var chromedriver = require('chromedriver');
var USERNAME_SELECTOR = "#j_username";
var PASSWORD_SELECTOR = "#j_password";
var BUTTON_SELECTOR = "#loginForm #login-button";
var ATTENDANCE_SELECTOR =
  "#attendence table.w-50 tr:last-child .btn.btn-large:not(.hide)";
var LOGOUT_SELECTOR =
  "#gts-bounce-nav ul.nav.pull-right li.dropdown:nth-child(3)";
var URL = 'https://greyatom.greythr.com/login.do';

module.exports = {
  login : function (client) {
        client
        .url(URL)
        .assert.title('greytHR Login')
        .waitForElementVisible(USERNAME_SELECTOR, 3000)
        .setValue(USERNAME_SELECTOR, 'GRE-31')
        .waitForElementVisible(PASSWORD_SELECTOR, 3000)
        .setValue(PASSWORD_SELECTOR, 'amrut123#K')
        .waitForElementVisible(BUTTON_SELECTOR, 3000)
        .click(BUTTON_SELECTOR)
        .pause(2000)
        .url('https://greyatom.greythr.com/v2/attendance/employee/markAttendance')
        .waitForElementVisible(ATTENDANCE_SELECTOR, 3000)
        .click(ATTENDANCE_SELECTOR)
        //.end()
    }
};