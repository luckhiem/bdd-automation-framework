import { Then } from 'cucumber';
import LoginPage from '../pageObjects/login.page';

Then(/^I should see main page after login$/, function () {
    LoginPage.verifyPageAfterLogin();
});

