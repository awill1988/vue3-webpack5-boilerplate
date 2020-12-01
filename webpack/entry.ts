import {join} from 'path';

import {rootDir} from './utils/env';

interface EntryStaticNormalized {
	[index: string]: any;
}

const entry: EntryStaticNormalized = {
	main: [
		join(rootDir, '/src/main.ts'),
		// join(__dirname, './utils/cleanConsoleOnHMR.js'),
	],
}

export default entry;
