const path = require('path')
const buildPath = path.join(__dirname, 'build')
const clientSrcPath = path.join(__dirname, 'client')
const clientBuildPath = path.join(buildPath, 'client')
const staticSrcPath = path.join(clientSrcPath, 'static')

module.exports = {
  buildPath,
  clientSrcPath,
  clientBuildPath,
  staticSrcPath,
  staticPublicPath: '/static'
}
