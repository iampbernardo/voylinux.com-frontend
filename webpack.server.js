var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: {
    src: ["./app.es6.js"]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "index.js"
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "src/sass")]
  },
  node: {
    fs: "empty"
  }
};
