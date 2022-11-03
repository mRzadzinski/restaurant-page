const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    module: {
        rules: [
          {
            test: /\.(scss|css)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
    },
};