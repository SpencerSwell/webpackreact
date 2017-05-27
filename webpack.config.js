
module.exports = {
	entry:'./index.js' ,

	output: {
		// path: 'build',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/ ,
			loader: 'babel-loader'
		},
		{
			loaders: ["style-loader","css-loader","sass-loader"],
			test:/\.scss$/
		}
	  ]
	},
 devServer: {
  historyApiFallback: true
}
};