const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/scripts/entry.jsx",
    output: {
        path: __dirname,
        filename: "./frontend/bundle.js"
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["react"]
          }
        }
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'source-maps',
    watch: true,
    devServer: {
      // contentBase: "./public",
      port: 3000,
      hot: true
    }
};
