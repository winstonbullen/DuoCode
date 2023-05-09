# DuoCode

DuoCode is a code learning app that is inspired by Duolingo. It is targeted towards those who are less experienced, but can cater to all levels. 

Existing resources fail to make coding practice exciting and accessible across all devices. DuoCode was conceived with the intention of filling this gap. 

## Release

The web app is currently in Alpha release. The steps to deploy the web app are listed below. This will start a localhost on port 3001. Please visit [localhost:3001/login.html](http://localhost:3001/login.html) once the server has started. The current release specifically allows users to:

- sign up using the username and password boxes on `login.html`.

- log in using the username and password boxes on `login.html` once they have signed up.

- try the demo questions under `app/questions` once they have logged in.

## Deployment

The ```Makefile``` contains all commands necessary to deploy the web app (node must be installed):

```shell
make install
make deploy
```

More development information can be found in the README.md for both [frontend](frontend/README.md) and [backend](backend/README.md).

## Scripts

The repository has a single ```Makefile``` in the top-level directory.

- ```make install```: runs npm install commands for both frontend and backend.

- ```make deploy```: runs npm build & start commands to deploy the web app.

- ```make test```: runs npm test commands for both frontend and backend.

- ```make clean```: runs npm clean commands to delete distributions.

## Directories

The repository has four top-level directories detailed below.

- ```/backend/```: contains all of the backend code and data. 

- ```/content/```: contains all of the content data.

- ```/frontend/```: contains all of the frontend code and prototypes.

- ```/reports/```: contains all of the weekly status reports.

Each directory has a ```README.md``` explaining their respective file structure and architecture.
