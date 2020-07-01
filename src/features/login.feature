Feature: Performing a login

    As a user on the phptravels login page
    I want to login
    Because I want to book the ticket

    Background:

        Given I am on the login page

    Scenario Outline: Performing login operation with passing test data as data table
        When I add the company name "performance_company" into the text box
        When I add with username and password <user> <password> into the text box
        When I add the sercurity code <codes> into the form
        Then I should see main page after login


        Examples:
            | user                       |  | password      |  | codes |
            | "performance_am_account_9" |  | "Testing@123" |  | "111111"|
