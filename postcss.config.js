module.exports = ({ options }) => ({
    plugins: {
        'postcss-preset-env': {},
        'postcss-import': {},
        cssnano: options.production === true ? {} : false,
    },
});