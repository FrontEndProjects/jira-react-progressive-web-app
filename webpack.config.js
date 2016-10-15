var webpack = require('webpack');
var path = require('path');


var config = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'app/App.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  eslint: {
    configFile: '.eslintrc.json'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __dirname: true,
    fs: 'empty'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public/'),
    colors: true,
    inline: true
  }
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
}

module.exports = config;
