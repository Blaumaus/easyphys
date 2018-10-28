const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {
  const isDevMode = options.mode === 'development'

  return {
    devtool: isDevMode ? 'source-map' : false,
    
    entry: './src/GUI/index.js',
    
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
    },
    
    module: {
      rules: [
        {
          test:  /\.jsx?$/, // JS and JSX
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMap: isDevMode
            }
          }
        },
        {
          test: /\.scss$/, // SCSS
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevMode
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("autoprefixer")()
                ],
                sourceMap: isDevMode
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevMode
              }
            }
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/, //Fonts
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/, // Images
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/"
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
