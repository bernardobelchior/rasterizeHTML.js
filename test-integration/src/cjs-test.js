const rasterizeHTML = require("rasterizehtml-cjs");
const { TestRunner } = require("./test-runner.js");

const runner = new TestRunner("CJS");
runner.testAPI(rasterizeHTML);
