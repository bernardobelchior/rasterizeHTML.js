// Shared utilities for all tests
export class TestRunner {
    constructor(testName) {
        this.testName = testName;
        this.results = [];
        this.resultsEl = document.getElementById("results");
        this.canvas = document.getElementById("test-canvas");
    }

    addResult(name, passed, message) {
        const div = document.createElement("div");
        div.className = `result ${passed ? "pass" : "fail"}`;
        div.textContent = `${passed ? "✓" : "✗"} ${name}: ${message}`;
        this.resultsEl.appendChild(div);
        this.results.push({ name, passed, message });
    }

    async testAPI(lib) {
        // Test 1: Library loaded
        this.addResult(
            "Library load",
            typeof lib !== "undefined",
            typeof lib !== "undefined"
                ? `${this.testName} library loaded`
                : "Failed to load",
        );

        // Test 2: Has expected API
        const hasDrawHTML = typeof lib.drawHTML === "function";
        const hasDrawURL = typeof lib.drawURL === "function";
        const hasDrawDocument = typeof lib.drawDocument === "function";

        this.addResult(
            "API - drawHTML",
            hasDrawHTML,
            hasDrawHTML ? "Method exists" : "Method missing",
        );
        this.addResult(
            "API - drawURL",
            hasDrawURL,
            hasDrawURL ? "Method exists" : "Method missing",
        );
        this.addResult(
            "API - drawDocument",
            hasDrawDocument,
            hasDrawDocument ? "Method exists" : "Method missing",
        );

        // Test 3: Basic rendering
        if (this.canvas) {
            try {
                const html = `<div style="color: ${this.getTestColor()}; font-weight: bold;">${this.testName} works!</div>`;
                const result = await lib.drawHTML(html, this.canvas);
                this.addResult(
                    "Render",
                    true,
                    "Successfully rendered HTML to canvas",
                );
                console.log("Render result:", result);
            } catch (error) {
                this.addResult("Render", false, `Error: ${error.message}`);
                console.error("Render error:", error);
            }
        }

        // Summary
        const passed = this.results.filter((r) => r.passed).length;
        const total = this.results.length;
        console.log(`\n${this.testName} Tests: ${passed}/${total} passed`);
    }

    getTestColor() {
        const colors = { ESM: "red", CJS: "blue", UMD: "green" };
        return colors[this.testName] || "black";
    }
}
