var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// Webpack Config
var webpackConfig = {
  entry: {
    'main': './src/main.browser.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, './src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
  ],

  module: {
    rules: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, use: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, use: 'raw-loader' }
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  devServer: {
    // setup: function(app) {
    //  // express middleware
    //  app.get('/data.json', function(req, res) {
    //    var json = require('./src/data.json');
    //    res.json(json);
    //  });
    // },
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};


module.exports = webpackMerge(defaultConfig, webpackConfig);
