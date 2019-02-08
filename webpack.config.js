let path = require('path');

let conf = {
	devtool:'source-map',
	entry: './user/index.js',
	output:{
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	devServer: {
    historyApiFallback: true,
  },
	module: {
		rules: [
		   {
			    test: /\.js$/,
			    exclude: '/node_modules',
			    use:[
			        {
			        	loader: 'babel-loader',
			    	    options: { presets:['react', 'stage-0'] }
			        }
			    ]
		    }
		]
	}
}
module.exports = conf;