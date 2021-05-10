import path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";

export const outputName = "mirrarray";

export default {
  entry: "./index.js",
  target: "es5",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, "./dist"),
    filename: `${outputName}.js`,
    library: outputName,
    libraryExport: "default",
    libraryTarget: "umd",
  },
  plugins: [
    new TerserWebpackPlugin({
      terserOptions: {
        compress: {
          warnings: true,
        },
        mangle: false,
      },
    }),
  ],
};
