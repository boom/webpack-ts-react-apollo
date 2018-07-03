const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const buildConfig = require('./build.config');

module.exports = {
  mode: 'development',
  entry: `${buildConfig.sourceJSDir}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: buildConfig.buildDir
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /node_modules/,
          new RegExp(buildConfig.buildName),
          /__test__/
        ]
      },
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
  'react': 'React',
  'react-dom': 'ReactDOM'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${buildConfig.sourcePublicDir}/index.html`,
      title: 'Welcome!',
      favicon: `${buildConfig.buildDir}/favicon.png`
    }),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: buildConfig.sourcePublicDir,
        to: buildConfig.buildDir,
        ignore: ['*.html'],
        force: true
      },
      {
        from: 'node_modules/react/umd/react.development.js',
        to: buildConfig.buildVendorDir
      },
      {
        from: 'node_modules/react-dom/umd/react-dom.development.js',
        to: buildConfig.buildVendorDir
      }
    ])
  ]
};