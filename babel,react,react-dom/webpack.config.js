const path = require("path");
const { optimize } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  optimization: { minimizer: [] },
};
