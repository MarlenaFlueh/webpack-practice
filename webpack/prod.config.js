const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ]
});
