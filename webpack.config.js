const path = require('path');

const webpack = require('webpack');
const Minify = require('babel-minify-webpack-plugin');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new Minify(),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      window: 'window',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'external-helpers',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
            ],
            presets: [
              'react',
              [
                'env', {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
  {
    entry: './src/templates.js',
    output: {
      filename: 'templates.js',
      path: path.resolve(__dirname, 'dist'),
      library: ['Drupal', 'templates'],
      libraryExport: 'default',
      libraryTarget: 'window',
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new Minify(),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'external-helpers',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
            ],
            presets: [
              'react',
              [
                'env', {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
  {
    entry: './src/templates/overrides/app.js',
    output: {
      filename: 'overrides-app.js',
      path: path.resolve(__dirname, 'dist'),
      library: ['Drupal', 'templates', 'App'],
      libraryExport: 'default',
      libraryTarget: 'window',
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new Minify(),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query: {
            plugins: [
              'external-helpers',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
            ],
            presets: [
              'react',
              [
                'env', {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                },
              ],
            ],
          },
        },
      ],
    },
  },
];
