import rasterizeHTML from "rasterizehtml-esm";
import { TestRunner } from "./test-runner.js";

const runner = new TestRunner("ESM");
runner.testAPI(rasterizeHTML);
