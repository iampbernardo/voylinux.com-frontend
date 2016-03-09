var path = require('path');
var autoprefixer = require('autoprefixer');

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
        loaders: ["style", "css", "sass", "postcss-loader"]
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
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader?name=[path][name]-[hash].[ext]'
      }
    ]
  },
  postcss: function () {
        return [autoprefixer];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "src/sass")]
  }
};
