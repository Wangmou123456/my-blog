module.exports = {
  publicPath: './',
  outputDir: 'build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.57.69.238:8005',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        serve: '@/serve',
        utils: '@/utils'
      }
    }
  }
}
