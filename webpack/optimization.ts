import {WebpackOptionsNormalized} from "webpack";

type Optimization = WebpackOptionsNormalized["optimization"]

const optimization: Optimization = {
	runtimeChunk: {
		name: 'runtime',
	},
	splitChunks: {
		cacheGroups: {
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendor',
				chunks: 'initial',
			},
		},
	},
};

export default optimization;
