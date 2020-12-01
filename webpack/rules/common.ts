import {babelLoader} from './useLoaderRuleItems';

export const vueRule = {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        compilerOptions: {
            preserveWhitespace: false
        }
    }
};

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
    test : /\.tsx?$/,
    use: [
        babelLoader,
        {
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
            },
        },
    ],
};

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader]
};

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
	test: /\.(html)$/,
	use: {
		loader: 'html-loader',
	},
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
	test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	type: 'asset/resource',
};

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const fontsRule = {
	test: /\.(woff(2)?|eot|ttf|otf|)$/,
	type: 'asset/inline',
};
