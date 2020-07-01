import { Given } from 'cucumber';
import LoginPage from '../pageObjects/login.page';

Given('I am on the login page', function () {
  LoginPage.open();
});
