const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "public", "main.ts"),
  output: {
    path: path.join(__dirname, "dist", "src", "public"),
    filename: "main.js"
  },
  mode: "development",
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};
