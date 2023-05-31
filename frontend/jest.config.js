/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestcfg = {
  roots: ["<rootDir>/test"],
  preset: 'ts-jest',
  testEnvironment: '<rootDir>/FixJSDOMEnvironment.ts',
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/fileMock.js",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        isolatedModules: true, // this disables type checking
      },
    ],
  },
  transformIgnorePatterns: [],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
};
export default jestcfg;
