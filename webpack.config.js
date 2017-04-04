"use strict";
const path = require("path");
const pkg = require("./package.json");

module.exports = {
    entry: path.resolve(__dirname, pkg.main),
    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2",
        filename: "index.bundle.js"
    },
    target: "node", // web for web application that need distrobution
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    }
};
