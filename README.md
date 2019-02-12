# Project: CI Base with TravisCI

[![Build Status](https://travis-ci.org/vukanac/ci-base-nodejs.svg?branch=master)](https://travis-ci.org/vukanac/ci-base-nodejs)

## Description

> CI with NodeJs and TravisCI

Code is hosted on *GitHub* and tests are run on *TravisCI* on every push to `master` branch.


This is base set of tools that help writing JavaScript code.

They are not obligatory but they are great help!

### eslint

Eslint will help you to write code with consistent style (quotation, indentation, unused variable, ...).

### flow

Consider using `@flow` for type checking.
If file starts with `/* @flow */` it will be checked for type use consistency.
It will tell if you return type that is not expected, or eg. pass parameter of
string and number is expected.

For example check `src/index.js`.


### The best use

Install plugins to Sublime Text 3:

* SublimeLinter
* SublimeLinter-contrib-eslint
* SublimeLinter-flow
* ESLint-Formatter

Optional:

* Babel
* DocBlockr
* FileManager
* GitGutter
* Pretty JSON
* SublimeLinter-annotations


## Install


    git clone https://github.com/vukanac/ci-base-nodejs.git jsstarter
    cd jsstarter
    npm install

## Start dev

    npm run flow start
    npm run flow status
    npm test
    npm run flow stop

Watching for changes:

    npm run test-watch


## Test

    npm test


### End-to-end tests

Install e2e runner:

    npm install nightwatch --save-dev

Install WebDriver (formerly Selenium WebDriver):

    npm install geckodriver --save-dev # firefox
    npm install chromedriver --save-dev # chrome
    C:/> DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0 # Edge
    safaridriver --enable # binary /usr/bin/safaridriver

Required:

    java -version

    echo "build/bin">>.gitignore
    mkdir -p build/bin
    curl -o build/bin/selenium-server-standalone-3.9.1.jar \
        http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar
    java -jar build/bin/selenium-server-standalone-3.9.1.jar --help


Add and configure `nightwatch.json` for Chrome directly or use this for Chrome with Selenium:

    {
      "selenium" : {
        "start_process" : true,
        "server_path" : "./bin/selenium-server-standalone-3.{VERSION}.jar",
        "log_path" : "",
        "port" : 4444,
        "cli_args" : {
          "webdriver.chrome.driver" : "./bin/chromedriver"
        }
      }
    }


## License

MIT

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvukanac%2Fci-base-nodejs.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvukanac%2Fci-base-nodejs?ref=badge_large)


Vladimir Vukanac
