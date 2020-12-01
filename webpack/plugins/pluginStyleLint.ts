import StyleLintPlugin from 'stylelint-webpack-plugin';
import {rootDir} from "../utils/env";

export const stylelintPlugin = new StyleLintPlugin({
    context: rootDir,
});
