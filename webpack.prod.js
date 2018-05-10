const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'none',

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})