var HtmlWebPackPlugin = require('html-webpack-plugin');
var HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
	template: __dirname + '/dev/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./dev/client.js'
	],
	output: {
		path: __dirname + '/prod',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	// resolve: {
	// 	extensions: ['', '.js', '.json']
	// },
	plugins: [HtmlWebPackPluginConfig]
}