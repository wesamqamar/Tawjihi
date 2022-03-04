module.exports = {
    runtimeCompiler: true,
    publicPath: '/',
    devServer: {
      hot: true,
      liveReload: true,
    },
    chainWebpack: config => {
      config.optimization.delete('splitChunks')
    },
  }
  