const path = require('path');

module.exports = {
  entry: ['./src/ReactMatchers.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'ReactMatchers.js',
    library: 'ReactMatchers',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel?optional=es7.classProperties', 'eslint'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
};
