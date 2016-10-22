var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.resolve(__dirname, './public/'),
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
  console.log('Listening at http://localhost:8080/');
});
