const prodConfig = require('webpack-config-trainiac/prod')
const baseConfig = require('./webpack.config.js')

module.exports = prodConfig(baseConfig)
