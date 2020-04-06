const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // Plugin will delete output folder contents to ensure fresh
    // content after each build
    new CleanWebpackPlugin(),
    // Make CSS file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // Plugins dynamically add script tag to HTML file
    // that will include JS files
    new HtmlWebpackPlugin({
      // Inserts Title tag to HTML template
      title: 'Video Overlay View',
      // Creates new HTML file by name
      filename: 'video-overlay.html',
      // Template HTML file
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Video Component View',
      template: 'src/index.html',
      filename: 'video-component.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Panel View',
      template: 'src/index.html',
      filename: 'panel.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Mobile View',
      template: 'src/index.html',
      filename: 'mobile.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Extract CSS import to JS file to another file
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Load images properly
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Twitch Dev requires vendor dependencies be bundled separately
        // This will take all node module imports and put them in another
        // file
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        // Combines all CSS being used into one file
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
