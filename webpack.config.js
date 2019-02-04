module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'solstice.js',
    library: 'solstice',
    libraryTarget: 'umd',
  },
  devtool: 'cheap-module-source-map',
  mode: 'development'
};
