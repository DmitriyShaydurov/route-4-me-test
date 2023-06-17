const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
    cart: {
      entry: 'src/cart.js',
      template: 'public/cart.html',
      filename: 'cart.html',
      title: 'Cart Page',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/cart$/, to: '/cart.html' },
      ],
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/route-4-me-test/'
    : '/',
};

