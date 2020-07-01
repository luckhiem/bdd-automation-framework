import { Then } from 'cucumber';
import LoginPage from '../pageObjects/login.page';

Then(/^I should see main page after login$/, function () {
    LoginPage.verifyPageAfterLogin();
});

Then(/^I should see error message when add invalid company name$/, function () {
    LoginPage.verifyErrorWithInvalidCompany();
});

Then(/^I should see error message when add invalid username$/, function () {
    LoginPage.verifyErrorWithInvalidUsername();
});

Then(/^I should see error message when add invalid sercurity code$/, function () {
    LoginPage.verifyErrorWithInvalidSercurityCode();
});

