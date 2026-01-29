// UMD loads via script tag in HTML, we just run the test
import { TestRunner } from "./test-runner.js";

// Wait for page to load
window.addEventListener("DOMContentLoaded", () => {
    if (window.rasterizeHTML) {
        const runner = new TestRunner("UMD");
        runner.testAPI(window.rasterizeHTML);
    } else {
        console.error("window.rasterizeHTML not found!");
    }
});
