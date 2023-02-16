const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/bundle')
  },
  devServer: {
    static: './public',
    port: 5000,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}