# ci-base-nodejs

[![Build Status](https://travis-ci.org/vukanac/ci-base-nodejs.svg?branch=master)](https://travis-ci.org/vukanac/ci-base-nodejs)

## Description

> CI with NodeJs and TravisCI


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
* SUblimeLinter-annotations


## Install


    git clone https://github.com/vukanac/ci-base-nodejs.git jsstarter
    cd jsstarter
    npm install

## Start dev

    npm run flow start
    npm run flow status
    npm test

Watching for changes:
    npm run test-watch


## Test

    npm test

## License

MIT

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvukanac%2Fci-base-nodejs.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvukanac%2Fci-base-nodejs?ref=badge_large)
