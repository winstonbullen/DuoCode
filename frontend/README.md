## DuoCode Frontend

### Development

Project is Node.js (v18.16.0) and Typescript.

First run `npm install` and `npm install --save-dev` to get the project dependencies and development dependencies.

The following development commands can be run:

- `npm run build` will just run the Typescript compiler to build into `build/`.
- `npm run test` will run the Jest test suite in `test/`.

All UI design can be found [here](https://www.figma.com/file/pJaO1w3OTs6tgY3BPKu7yl/DuoCode?type=design&node-id=90-736).

### Adding Tests

Write tests in `/test/{file_name}.test.tsx` where `{file_name}` is the name of the component being tested. If the test file does not exist, create it using the existing test files as examples. [Jest](https://jestjs.io/) should be used for testing and is automatically installed with `make install`.