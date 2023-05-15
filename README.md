# DuoCode

DuoCode is a code learning app that is inspired by Duolingo. It is targeted towards those who are less experienced, but can cater to all levels. 

Existing resources fail to make coding practice exciting and accessible across all devices. DuoCode was conceived with the intention of filling this gap. 

## Setup

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) must be installed to clone and contribute to this repository. This repository contains all of the source code for DuoCode.

2. [Node.js](https://nodejs.org/en/download) (18.x) must be installed to build, test, and release the web app. The default install instructions and options should suffice. 

3. [Make](https://www.gnu.org/software/make/manual/make.html) must be installed to run the commands outlined in the `Makefile`. This makes building, testing, and releasing easier.

## Directories

This repository has four top-level directories detailed below.

- `/backend/` contains all of the backend files including code and documentation. 
- `/content/` contains all of the content data comprising the content database.
- `/frontend/` contains all of the frontend files including code and documentation.
- `/reports/` contains all of the weekly status reports.

Each directory has a `README.md` explaining their respective file structure and architecture.

## Makefile

This repository has a single `Makefile` in the top-level directory.

- `make install` runs npm install commands for both frontend and backend. This manages package dependencies automatically.
- `make deploy` runs npm build and start commands to deploy the web app. The build and start commands are separated into `make build` and `make run`, respectively.
- `make test` runs npm test commands for both frontend and backend. This runs all tests which can be found under `/frontend/test/` and `/backend/test/`.

## Build

The `Makefile` contains all of the commands necessary to build. From the top-level directory, run the following:

```shell
make install
make build
```

## Test

The `Makefile` contains all of the commands necessary to test once the app has been built. From the top-level directory, run the following:

```shell
make test
```

Add frontend tests under `/frontend/test/`. Name the test file `{file_name}.test.tsx` where `{file_name}` is the file name of the component being tested. Add backend tests under `/backend/test/`. Name the test file `{file_name}.test.ts` where `{file_name}` is the file name of the class being tested. [Jest](https://jestjs.io/) should be used for testing and is automatically installed with `make install`.

## Release

The `Makefile` contains all of the commands necessary to deploy the web app. From the top-level directory, run the following:

```shell
make install
make deploy
```

This will start a localhost on port 3001. Please visit [localhost:3001](http://localhost:3001) once the server has started to begin using DuoCode!
