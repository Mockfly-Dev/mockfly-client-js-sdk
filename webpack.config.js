const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'mockfly-js-sdk.js',
    library: 'Mockfly',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
}
