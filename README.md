# DuoCode

DuoCode is a code learning app that is inspired by Duolingo. It is targeted towards those who are less experienced, but can cater to all levels. 

Existing resources fail to make coding practice exciting and accessible across all devices. DuoCode was conceived with the intention of filling this gap. 

## Directories

The repository has four top-level directories detailed below.

- ```/backend/```: Contains all of the backend code and data. 

- ```/content/```: Contains all of the content data.

- ```/frontend/```: Contains all of the frontend code and prototypes.

- ```/reports/```: Contains all of the weekly status reports.

Each directory has a ```README.md``` explaining their respective file structure and architecture.

## Scripts

The repository has a single ```Makefile``` in the top-level directory.

- ```make install```: runs npm install commands for both frontend and backend.

- ```make deploy```: runs npm build & start commands to deploy the web app.

- ```make test```: runs npm test commands for both frontend and backend.

- ```make clean```: runs npm clean commands to delete distributions.
