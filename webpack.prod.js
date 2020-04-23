const path = require('path')
// npm install --save-dev clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// outputフォルダを常に綺麗に保つ。一つのファイルに纏め他のファイルを消す
module.exports = {
  mode: 'production',
  //entry: './dist/main.js',
  entry: './src/library.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      // ファイル種類を正規表現で調べる
      test: /\.ts$/,
      // 型テスト
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    // importした時拡張子がついていなかったら ts jsの順で探す
    extensions: ['.ts','.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}