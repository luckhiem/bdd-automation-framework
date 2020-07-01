Feature: Login failed

    As a user on the leap expert login page
    I want to login
    Because I want to chatting

    @webdriverIOScenario1
    Scenario: Login operation with invalid company name
        Given I am on the login page
        When I add the company name "invalid" into the text box
        Then I should see error message when add invalid company name

    @webdriverIOScenario2
    Scenario Outline: Login operation with invalid username
        Given I am on the login page
        When I add the company name "performance_company" into the text box
        When I add with username and password <user> <password> into the text box
        Then I should see error message when add invalid username

        Examples:
            | user           |  | password      |  | codes    |
            | "invalid_user" |  | "Testing@123" |  | "111111" |

    @webdriverIOScenario3
    Scenario Outline: Login operation with invalid sercurity code
        Given I am on the login page
        When I add the company name "performance_company" into the text box
        When I add with username and password <user> <password> into the text box
        When I add the sercurity code <codes> into the form
        Then I should see error message when add invalid sercurity code

        Examples:
            | user                       |  | password      |  | codes    |
            | "performance_am_account_9" |  | "Testing@123" |  | "000000" |