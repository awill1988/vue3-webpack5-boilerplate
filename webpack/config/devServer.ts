import isWindows from 'is-windows';

import {devServerProxyConfig} from './devServerProxy';

const defaultPort = 8888;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
	// publicPath: '/',
	port: defaultPort,
	historyApiFallback: true,
	headers: {'Access-Control-Allow-Origin': '*'},
	proxy: devServerProxyConfig,
	hot: true,
	overlay: false,
	host: devServerHost,
};
