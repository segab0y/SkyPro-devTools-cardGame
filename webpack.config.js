const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
   mode: 'development',
   entry: './index.js',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      clean: true,
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
      ],
   },

   plugins: [
      new CopyPlugin({
         patterns: [{ from: 'static', to: 'static' }],
      }),

      new HtmlWebpackPlugin({
         template: './index.html',
         files: {
            js: ['./index.js'],
         },
      }),

      new HtmlWebpackPlugin({
         filename: 'shirts.html',
         template: './shirts.html',
         files: {
            js: ['./index.js'],
         },
      }),

      new HtmlWebpackPlugin({
         filename: 'cards.html',
         template: './cards.html',
         files: {
            js: ['./index.js'],
         },
      }),
   ],
}
