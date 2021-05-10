const path = require("path");
 
module.exports = {
  // 入力ファイル設定
  entry: [path.resolve(__dirname, "./client/ts/app/index.tsx")],
  // 出力ファイル設定
  output: {
    // 出力されるファイル名
    filename: "bundle.js",
    // 出力先ディレクトリ
    path: path.resolve(__dirname, "dist")
  },
 
  // モジュール設定
  module: {
    rules: [
      {
        // ts-loaderの設定
        test: /\.(js|ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  // モジュール解決
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
 
  // 開発モード設定
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/api": {
        target: 'http://server:3000'
      }
    }
  }
};
