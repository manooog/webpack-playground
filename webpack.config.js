module.exports = {
  entry: "./src/index.js",
  output: {
    library: "someLibName",
    // libraryTarget: "umd",
    filename: "[name].[chunkhash:8].js",
    jsonpFunction: `webpackJsonp_someLibName`,
    // chunkLoadingGlobal: `webpackJsonp_someLibName`, // webpack4不支持
    // clean: true, // webpack 4不支持
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        venders: {
          test: /node_modules/,
          name: "venders",
        },
        // 如果不加下面的配置，a不会被拆包
        a: {
          test: /a\.js/,
          name: "a",
        },
      },
    },
  },
};
