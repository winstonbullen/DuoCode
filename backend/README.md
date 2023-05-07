## DuoCode Backend
### Development
Project is Node.js (v18.16.0) with Express and Typescript.

To get started, run `npm install` and
`npm install --save-dev` to get the project dependencies and development dependencies.

Helper scripts for building have been set up.
- `npm run dev` will start a hot-reloading development server
- `npm run start` will start the server from the last build in `dist/`
- `npm run build` will just run the Typescript compiler to build into `dist/`
- `npm run clean` will remove the `dist/` directory
- `npm run build` will make sure the backend builds, then will run the Jest test suite in `test/`.