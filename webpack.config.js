const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env'] }
          }
        ]
      }
    ]
  }
}
