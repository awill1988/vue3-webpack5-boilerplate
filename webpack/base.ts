import path from 'path';
import {WebpackOptionsNormalized} from 'webpack';
import {aliasItems, devServerUrl, externalItems} from './config';
import entry from './entry';
import optimization from './optimization';
import * as plugins from './plugins';
import * as rules from './rules';
import {isDevServer, isProd} from './utils/env';
import {arrayFilterEmpty} from './utils/helpers';

const config: Partial<WebpackOptionsNormalized> = {
	context: __dirname,
	target: ['web', 'es5'],
	mode: isProd ? 'production' : 'development',
	entry,
	output: {
		path: path.join(__dirname, '../build'),
		publicPath: isDevServer ? devServerUrl : './',
		filename: isDevServer
			? '[name].[fullhash].js'
			: '[name].[contenthash].js',
	},
	module: {
		rules: arrayFilterEmpty([
		    rules.vueRule,
			rules.typescriptRule,
			rules.javascriptRule,
			rules.htmlRule,
			rules.imagesRule,
			rules.fontsRule,
            rules.cssRule,
            ...rules.lessRules,
            ...rules.sassRules,
            ...rules.svgRules,
        ]),
	},
	plugins: arrayFilterEmpty([
		plugins.htmlWebpackPlugin,
		plugins.providePlugin,
		plugins.definePlugin,
		plugins.forkTsCheckerWebpackPlugin,
		plugins.esLintPlugin,
		plugins.copyPlugin,
        plugins.vueLoaderPlugin,
        plugins.stylelintPlugin
	]),
	resolve: {
		alias: aliasItems,
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.vue', '.css'],
	},
	optimization,
	externals: externalItems,
};

export default config;
