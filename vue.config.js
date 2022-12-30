module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "/new-year-new-library/" : "/",
  devServer: {
    port: 8888
  }
}