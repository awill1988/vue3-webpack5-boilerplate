import TerserJSPlugin from 'terser-webpack-plugin';
import {WebpackOptionsNormalized} from 'webpack';
import * as plugins from './plugins';

const config: Partial<WebpackOptionsNormalized> = {
	optimization: {
		minimize: true,
		minimizer: [new TerserJSPlugin({})],
	},
	plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};

export default config;
