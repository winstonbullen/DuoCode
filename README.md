# DuoCode

[DuoCode](https://duocode.onrender.com) is a code learning app that is inspired by Duolingo. It makes learning code more fun and accessible than ever. It caters to a diverse range of skill levels and needs. [Start learning today](https://duocode.onrender.com)! 

## Users

Please visit the DuoCode [homepage](https://duocode.onrender.com) for more information and user documentation. 

## Setup

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) must be installed to clone and contribute to this repository. This repository contains all of the source code for DuoCode.

2. [Node.js](https://nodejs.org/en/download) (18.x) must be installed to build, test, and release the web app. The default install instructions and options should suffice. 

3. [Make](https://www.gnu.org/software/make/manual/make.html) must be installed to run the commands outlined in the `Makefile`. This makes building, testing, and releasing easier.

4. There must be a `.env` file created in `/backend/` containing some secret keys. Please ask the dev team for this.

## Directories

There are four top-level sub-directories detailed below that each have a `README.md` explaining their respective file structure.

- `/backend/` contains all of the backend files including code and documentation. 
- `/content/` contains all of the content data comprising the content database.
- `/frontend/` contains all of the frontend files including code and documentation.
- `/reports/` contains all of the weekly status reports.

There is a `Makefile` in the top-level directory that makes developing easier.

- `make install` runs npm install commands for both frontend and backend. This manages package dependencies automatically.
- `make deploy` runs npm build and start commands to deploy the web app. The build and start commands are separated into `make build` and `make run`, respectively.
- `make test` runs npm test commands for both frontend and backend. This runs all tests which can be found under `/frontend/test/` and `/backend/test/`.

## Build

Run the following from the top-level directory to build the web app:

```
make install
make build
```

## Test

Run the following from the top-level directory to test the web app:

```
make test
```

To add new tests, please refer to the [frontend](./frontend/README.md) and [backend](./backend/README.md) `README.md` files.

## Release

Commits to `main` automatically deploy the web app through [render.com](https://render.com/) at [this](https://duocode.onrender.com) url. Pushes to main are disabled, so this is only possible through pull requests that require at least one other collaborator to code review.

Run the following from the top-level directory to run the web app locally:

```
make install
make deploy
```

This hosts DuoCode at [http://localhost:3001](http://localhost:3001) for local use.
