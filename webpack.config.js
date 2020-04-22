const path = require('path')

module.exports = {
  //entry: './dist/main.js',
  entry: './src/food-app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}