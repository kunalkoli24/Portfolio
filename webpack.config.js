const path = require('path');

module.exports = {
  entry: './script.js', // Entry point (your main JS file)
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory (will create 'dist' folder)
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Load CSS files
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  mode: 'production', // Production mode for optimized output
};
