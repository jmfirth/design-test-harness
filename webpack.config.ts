import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/design-test-harness.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'design-test-harness.min.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  }
}

module.exports = config;
