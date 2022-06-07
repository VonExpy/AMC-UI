# AMC

## Local server
Run `npm install`
change directory to client and Run `npm install`
Run `npm run build` in folder base path
Run `npm run start` to start the local server `http://localhost:3000/`

## Client Environment API Path for local to prod URL
go to client/src/environment/environment.ts change the ApiUrl `http://localhost:3000` to prod URL
Run `npm run build` in folder base path, dist will be generated with prod URL path

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

