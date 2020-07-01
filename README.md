# leapexpert-automation-framework
This repository is used for executing automation test

## Version
1.0.0

## Enviroment
* NodeJS: v12.17.0
* NPM: v6.14.5

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/luckhiem/leapexpert-automation-framework.git
$ cd leapexpert-automation-framework
$ npm install
```

## Run Test
1. Run web automation test
```
$ npm run test
```
## Report
After executing test, run comand to generate html report
```
$ npm run allure-reports
``` 
# Framework structure
The framework base on WebdriverIO & Cucumber
```
├── report                           // folder contains report        
├── src
│   ├── config                       // folder includes file config test runner
│   ├── features                     // folder includes files feature test suite 
│   ├── pageObject
│   │   ├── login.page.js            // folder contains page object for login page
│   │   └── page.js                  // file contains common methid
│   |── utils                        // folder includes common funcions/ultilities that can used in all project
│── package.json                     // file to manage all dependencies to using in this project
```
