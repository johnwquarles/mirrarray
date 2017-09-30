import webpack from 'webpack';
import path from 'path';
import config from './package.json';

export const outputName = 'mirrarray';

export default {
  entry: './index.js',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${outputName}.js`,
    library: outputName,
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
};