const devConfig = require('webpack-config-trainiac/dev')
const baseConfig = require('./webpack.config.js')

module.exports = devConfig(baseConfig)
