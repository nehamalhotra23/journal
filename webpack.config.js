const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //new line
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // new line
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  // new line
  devServer: {                 // new line
    contentBase: './dist'      // new line
  },
  plugins: [
      new UglifyJsPlugin({ sourceMap: true }),    // new line
      new CleanWebpackPlugin(['dist']),   // new line
      new HtmlWebpackPlugin({
        title: 'journal',
        template: './src/index.html',
        inject: 'body'
      })
    ],

};
