const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    entry: path.resolve(__dirname, 'index.web.js'), // Your web entry point
    output: {
      path: path.resolve(__dirname, 'build'), // Output directory
      filename: '[name].[hash].bundle.js',
      publicPath: '/', // Ensures correct loading of assets
    },
    resolve: {
      extensions: ['.web.js', '.js', '.web.tsx', '.tsx', '.ts'], // Ensure TypeScript files are recognized
      alias: {
        'react-native$': 'react-native-web', // Alias to map React Native imports to React Native Web
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-typescript'],
              },
            },
            'ts-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|jpe?g|png|webp)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
            },
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'config/custom/fonts',
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'), // Path to your HTML template
      }),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(devMode),
      }),
    ],
    devServer: {
      hot: true,
      port: 4000, // Webpack dev server port
      historyApiFallback: true, // Supports client-side routing
    },
  };
};
