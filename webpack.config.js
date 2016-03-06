var path = require('path');
module.exports = {
  entry: {
    src: ["./src/entry.js"]
  },
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
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
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "src/sass")]
  }
};
