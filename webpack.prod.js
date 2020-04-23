const path = require('path')
// outputフォルダを常に綺麗に保つ。一つのファイルに纏め他のファイルを消す
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  //entry: './dist/main.js',
  entry: './src/food-app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/dist/'
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