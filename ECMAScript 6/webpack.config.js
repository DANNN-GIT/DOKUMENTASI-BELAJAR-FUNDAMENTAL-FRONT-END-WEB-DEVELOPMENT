const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/js/main.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      hot: true,
      client: {
         overlay: {
            errors: true,
            warnings: false,
         }
      }
   },
   module: {
      rules: [
         {
            test: /\.(scss)$/,
            use: [
               { loader: 'style-loader' },
               { loader: 'css-loader' },
               {
                  loader: 'postcss-loader', 
                  options: {
                     postcssOptions: {
                        plugins: () => [
                           require('autoprefixer')
                        ]
                     }
                  }
               },
               { loader: 'sass-loader' }
            ]
         },
         {
            test: /\.css$/,
            use: [
               { loader: 'style-loader' },
               { loader: 'css-loader' }
            ]
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
                  options: { presets: ['@babel/preset-env'] }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/main.html',
         filename: 'index.html'
      })
   ]
}