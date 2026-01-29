const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        "esm-test": "./src/esm-test.js",
        "cjs-test": "./src/cjs-test.js",
        "umd-test": "./src/umd-test.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        alias: {
            // Point to parent dist directory
            "rasterizehtml-esm": path.resolve(
                __dirname,
                "../dist/rasterizeHTML.mjs",
            ),
            "rasterizehtml-cjs": path.resolve(
                __dirname,
                "../dist/rasterizeHTML.js",
            ),
        },
    },
    plugins: [
        // ESM test page
        new HtmlWebpackPlugin({
            template: "./public/esm.html",
            filename: "esm.html",
            chunks: ["esm-test"],
            title: "ESM Test",
        }),
        // CJS test page
        new HtmlWebpackPlugin({
            template: "./public/cjs.html",
            filename: "cjs.html",
            chunks: ["cjs-test"],
            title: "CJS Test",
        }),
        // UMD test page (no webpack bundle, loads library directly)
        new HtmlWebpackPlugin({
            template: "./public/umd.html",
            filename: "umd.html",
            chunks: ["umd-test"],
            title: "UMD Test",
        }),
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname, "dist"),
            },
            {
                // Serve parent dist and node_modules for UMD test
                directory: path.join(__dirname, ".."),
                publicPath: "/parent",
            },
        ],
        port: 3000,
        open: "/esm.html",
    },
};
