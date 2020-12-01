import merge from 'webpack-merge';
import {WebpackOptionsNormalized} from 'webpack';

import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import {isProd} from './webpack/utils/env';
import prodConfig from './webpack/prod';

export default () =>
	isProd ? merge<Partial<WebpackOptionsNormalized>>(baseConfig, prodConfig) : merge<Partial<WebpackOptionsNormalized>>(baseConfig, devConfig);
