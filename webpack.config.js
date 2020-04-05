const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",

  entry: {
    main: "./src/index.jsx"
  },

  output: {
    filename: '[name].[contenthash:5].js',
    path: path.resolve(__dirname, 'build'),
  },

  devServer: {
    open: true,
    port: 9000
  },

  module: {
    rules: [
      
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      { 
        title: 'test',
        template: 'index.html',
      } 
    ),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
    }),
    
    new CleanWebpackPlugin()
  ]
};
