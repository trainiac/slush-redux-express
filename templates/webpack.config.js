const config = require('./config')
const baseConfig = require('webpack-config-trainiac/base')

module.exports = baseConfig(
 config.clientSrcPath,
 config.clientBuildPath,
 config.staticSrcPath,
 config.staticPublicPath,
 config.buildPath
)
