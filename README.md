# DuoCode

DuoCode is a code learning app that is inspired by Duolingo. It is targeted towards those who are less experienced, but can cater to all levels. 

Existing resources fail to make coding practice exciting and accessible across all devices. DuoCode was conceived with the intention of filling this gap. 

## Release

The web app is currently in Alpha release which needs local setup to run. The steps to deploy the web app are listed below. This will start a localhost on port 3001. Please visit [localhost:3001](http://localhost:3001) once the server has started. The current release specifically allows users to:

- Sign up using the name and password boxes on `signup.html`.
- Log in using the name and password boxes on `login.html` once they have signed up.
- Try the demo questions under `app/questions` once they have logged in by clicking on their desired lesson.
    - Only the first lesson is available for Alpha but questions are fully functional for correctness and content. Language select is not functional.

## Deployment

[Node.js](https://nodejs.org/en/download) must be installed to build, run, and test the web app. The recommended installation instructions and options should suffice. 

The ```Makefile``` contains all of the commands necessary to deploy the web app once Node.js is installed:

```shell
make install
make deploy
```

More development information can be found in the README.md for both [frontend](frontend/README.md) and [backend](backend/README.md).

## Scripts

The repository has a single ```Makefile``` in the top-level directory.

- ```make install``` runs npm install commands for both frontend and backend. This manages package dependencies automatically.
- ```make deploy``` runs npm build and start commands to deploy the web app. The build and start commands are separated into ```make build``` and ```make run```, respectively.
- ```make test``` runs npm test commands for both frontend and backend. This runs all tests which can be found under ```/frontend/test``` and ```/backend/test```.

## Directories

The repository has four top-level directories detailed below.

- ```/backend/``` contains all of the backend files including code and documentation. 
- ```/content/``` contains all of the content data comprising the content database.
- ```/frontend/``` contains all of the frontend files including code and documentation.
- ```/reports/``` contains all of the weekly status reports.

Each directory has a ```README.md``` explaining their respective file structure and architecture.
