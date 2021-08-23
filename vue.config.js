module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuepress-theme-wei/'
      : '/'
  }