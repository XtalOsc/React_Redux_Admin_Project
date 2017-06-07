import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};//end GLOBALS

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),//optimized the order files are bundled in for optimal minification
    new webpack.DefinePlugin(GLOBALS),//define variables that are made avaliable to the libraries webpack is bundling
    new ExtractTextPlugin('styles.css'),//extract CSS into a seperate file
    new webpack.optimize.DedupePlugin(),//elimates duplicate packages in the final bundle
    new webpack.optimize.UglifyJsPlugin()//minifies JS
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
