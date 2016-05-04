module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    publicParth: '/'
  },
  resolve: {
    root: __dirname,
    alias : {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/
      }
    ]
  }
};
