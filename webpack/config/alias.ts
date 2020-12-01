/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
	'@': join(rootDir, '/src'),
    'vue': '@vue/runtime-dom',
};
