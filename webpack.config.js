var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
 
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
          
        }
      },
      //下面是使用 css的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
      
    ]
  },
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  }
};
