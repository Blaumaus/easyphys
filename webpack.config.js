const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/GUI/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test:  /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}