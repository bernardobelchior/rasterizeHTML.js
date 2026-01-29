# Integration Tests for rasterizeHTML.js

Webpack-based integration tests for all output formats.

## Setup

```bash
cd test-integration
npm install
```

## Build Library First

```bash
cd ..
npm run build
cd test-integration
```

## Run Tests

### Build test bundles

```bash
npm run build
```

### Start dev server and run tests

```bash
npm run serve
```

This will open http://localhost:3000/esm.html

Navigate to:

-   ESM: http://localhost:3000/esm.html
-   CJS: http://localhost:3000/cjs.html
-   UMD: http://localhost:3000/umd.html

## What's Tested

Each test page verifies:

1. Library/global loads correctly
2. API methods exist (drawHTML, drawURL, drawDocument)
3. Basic rendering to canvas works

**ESM**: Tests ES module import from `.mjs` file
**CJS**: Tests CommonJS require (webpack-bundled) from `.js` file
**UMD**: Tests browser global via `<script>` tag

## Expected Results

All test pages should show:

-   ✓ Library load: PASS
-   ✓ API - drawHTML: PASS
-   ✓ API - drawURL: PASS
-   ✓ API - drawDocument: PASS
-   ✓ Render: PASS

Canvas should display colored text for each format:

-   ESM: red text
-   CJS: blue text
-   UMD: green text
