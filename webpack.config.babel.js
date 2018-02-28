import webpack from 'webpack'
import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

import packageConfig from './package'

const libraryName = packageConfig.name
const PROD = process.env.NODE_ENV === 'prod'

const inputPath = path.resolve('src')
const outputPath = path.resolve(__dirname, 'dist')

let outputName
let plugins = []

if ( PROD ) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		sourceMap: false,
		compress: { warnings: false }
	}))
  outputName = `${ libraryName }.min.js`
} else {
  plugins.push(new CleanWebpackPlugin([ outputPath ]))
  outputName = `${ libraryName }.js`
}

export default {
	devtool: 'source-map',
	entry: `${ libraryName }.js`,
	output: {
		path: outputPath,
		library: libraryName,
		filename: outputName,
    libraryTarget: 'umd',
    umdNamedDefine: true
	},
	externals: {
		'three': 'three'
	},
  resolve: {
    modules: [inputPath],
    extensions: ['*', '.js']
  },
	plugins: plugins,
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				include: inputPath,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				include: inputPath,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					compact: true,
					presets: [
						['env', { modules: false }]
					]
				}
			}
		]
	}
}
