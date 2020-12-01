import {join} from 'path';
import {isDev, rootDir} from '../utils/env';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {ForkTsCheckerWebpackPluginOptions} from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions";

const config: ForkTsCheckerWebpackPluginOptions = {
    async: isDev,
    typescript: {
        configFile: join(rootDir, '/tsconfig.json'),
    },
    eslint: {enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}'},
    logger: {infrastructure: 'silent', issues: 'console'},
};

export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(
    config,
);
