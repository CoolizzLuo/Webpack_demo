const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
	},
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}