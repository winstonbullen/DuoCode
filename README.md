# DuoCode

[DuoCode](https://duocode.onrender.com) is a code learning app that is inspired by Duolingo. It makes learning code more fun and accessible than ever. It caters to a diverse range of skill levels and needs. [Start learning today](https://duocode.onrender.com)! 

## Users

Please visit the DuoCode [homepage](https://duocode.onrender.com) for more information and user documentation. 

## Setup

The [Node.js](https://nodejs.org/en/download) (v18.16.0) runtime must be installed before continuing. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) must also be installed to obtain the source code and contribute. [Make](https://www.gnu.org/software/make/manual/make.html) should also be installed to streamline development. The default installation instructions should suffice for all of the above.

There must also be a `.env` file created in `/backend/` containing some secret keys. Please ask the dev team for this. The `.env` file is included in the `.gitignore` and should thus never be pushed to the repository. It must be kept an absolute secret.

## Directories

There are four top-level sub-directories detailed below that each have a `README.md` explaining their respective file structure.

- `/backend/` contains all of the backend files including code and documentation. 
- `/content/` contains all of the content data comprising the content database.
- `/frontend/` contains all of the frontend files including code and documentation.
- `/reports/` contains all of the weekly status reports.

## Development

There is a `Makefile` in the top-level directory that streamlines development. The following commands can be run in the top-level directory.

- `make install` runs npm install commands for both frontend and backend. This manages package dependencies automatically. Installations are placed under `/frontend/node_modules/` and `/backend/node_modules/`.
- `make build` runs npm build commands for both frontend and backend. Builds are placed under `/frontend/build` and `/backend/dist/`.
- `make test` runs npm test commands for both frontend and backend. This runs all tests under `/frontend/test/` and `/backend/test/`.
- `make run` runs the npm start command for backend. This starts the local host web app at [http://localhost:3001](http://localhost:3001).

The repository has GitHub CI set up to automatically run the test suite on pull requests and pushes to `main`. To add new tests for both local and CI testing, please refer to the [frontend](./frontend/README.md) and [backend](./backend/README.md) `README.md` files.

## Release

The repository has [render.com](https://render.com/) set up to automatically deploy the [website](https://duocode.onrender.com) on pull requests and pushes to `main`. Direct pushes to main are disabled, so this is only possible through pull requests that require at least one other collaborator to code review. 
