module.exports = {
  entry: ['./src/ReactMatchers.js'],
  output: {
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
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
};
