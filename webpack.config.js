const path = require("path");

module.exports = {
  entry: "./src/script.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve("./public")
  },
  module: {
    rules: [{ test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    contentBase: path.resolve("./public"),
    port: 8080
  }
};
