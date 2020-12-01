import {WebpackOptionsNormalized} from 'webpack';
import {devServerConfig} from './config';

const config: Partial<WebpackOptionsNormalized> = {
	devtool: 'cheap-module-source-map',
	plugins: [],
	devServer: devServerConfig,
};

export default config;
