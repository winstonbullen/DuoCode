## DuoCode Backend

### Development

Project is Node.js (v18.16.0) with Express and Typescript.

First run `npm install` and `npm install --save-dev` to get the project dependencies and development dependencies.

The following development commands can be run:

- `npm run build` will just run the Typescript compiler to build into `dist/`.
- `npm run start` will start the server from the last build in `dist/`.
- `npm run dev` will start a hot-reloading development server.
- `npm run test` will make sure the backend builds, then will run the Jest test suite in `test/`.
- `npm run clean` will remove the `dist/` directory.

See [API.md](API.md) for the API documentation.

### Adding Tests

Write tests in `/test/{file_name}.test.ts` where `{file_name}` is the name of the class being tested. If the test file does not exist, create it using the existing test files as examples. [Jest](https://jestjs.io/) should be used for testing and is automatically installed with `make install`.