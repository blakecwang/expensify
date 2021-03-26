const path = require('path')
const public_dir = path.join(__dirname, 'public')

module.exports = {
  entry: './src/index.js',
  output: {
    path: public_dir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
//        use: {
//          loader: 'babel-loader',
//          options: {
//            presets: ['env', 'react'],
//            plugins: [
//              'transform-class-properties',
//              'transform-object-rest-spread'
//            ]
//          }
//        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: public_dir,
    historyApiFallback: true
  }
}
