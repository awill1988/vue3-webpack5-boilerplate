import {argv} from 'yargs';

interface ParsedArguments{
	mode: string,
	isDevServer: boolean,
}

export const parseArguments = (): ParsedArguments => {
	const {env = []} = argv;
	return (env as string[]).reduce((accumulator, currentValue) => {
		const [key, value = true] = currentValue.split('=');
		return {...accumulator, [key]: value};
	}, {}) as ParsedArguments;
};

export const arrayFilterEmpty = (array: unknown[]): any[] => array.filter((x) => !!x);

export const pathRewrite = (localUrl: string, remoteUrl: string) => (path: string) =>
	path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);
