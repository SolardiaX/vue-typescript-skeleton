// noinspection NpmUsedModulesInstalled,JSUnusedGlobalSymbols,JSUnresolvedVariable

const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('terser-webpack-plugin')
const {LodashModuleReplacementPlugin} = require('lodash-webpack-plugin')

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir) // base dir

const {NODE_ENV, BASE_URL, VUE_APP_PORT, VUE_APP_API_URL} = process.env
const IS_PROD = ['production', 'prod'].includes(NODE_ENV)

module.exports = {
  publicPath: BASE_URL,
  productionSourceMap: false,
  outputDir: 'dist',
  css: {
    requireModuleExtension: true, // Enable CSSmodule and keep xxx.module.css
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin("loadshReplace")
      .use(new LodashModuleReplacementPlugin())

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(!IS_PROD, (config) => config.devtool('cheap-source-map'))

    // config loaders
    config.resolve.alias.set('@', resolve('src'))
    // 打包分析
    if (IS_PROD) {
      config.optimization.delete('splitChunks')
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.plugins.push(
        new UglifyJsPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          extractComments: false, 
          sourceMap: false,
          parallel: true
        }),
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: true
        })
      )
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: 'chunk-common',
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            },
            antd: {
              name: 'chunk-ant-design-vue',
              test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
              chunks: 'all',
              priority: 3,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      }
    }
  },
  devServer: {
    port: VUE_APP_PORT || 8000,
  }
}
