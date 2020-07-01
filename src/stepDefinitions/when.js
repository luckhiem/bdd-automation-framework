import {When} from 'cucumber';
import LoginPage from '../pageObjects/login.page';

// *** belongs to ta-loging feature
When(/^I add the company name "([^"]*)" into the text box$/, function (arg1) {
    LoginPage.addCompany(arg1);    // entering company name submiting the page
});

// *** belongs to ta-loging feature
When(/^I add with username and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    LoginPage.addUserAuth(arg1, arg2);    // entering user name, password and and submiting the page
});

// *** belongs to ta-loging feature
When(/^I add the sercurity code "([^"]*)" into the form$/, function (arg1) {
    LoginPage.addSecurityCode(arg1);    // entering sercurity code and submiting the page
});

