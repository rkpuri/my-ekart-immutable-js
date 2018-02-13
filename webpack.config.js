var path = require('path');

module.exports = {
	//context: path.join(__dirname, ''),
	entry: './src/index.js',
	module: {
		loaders: [
			{
        		test: [/\.jsx?$/, /\.js?$/],
				 exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.less$/,
				exclude: /(node_modules)/,
				 use: ["style-loader", "css-loader", "less-loader"],
			}
		]
	},
	output: {
		filename: './public/build.js'
	}
}