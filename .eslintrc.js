module.exports = {
    root: true,
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier',
        'prettier/vue',
        '@vue/typescript',
        'plugin:import/typescript' // # this line does the trick
    ],
    plugins: ['vue'],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
            ],
            env: {
                jest: true
            }
        }
    ],
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'webpack.config.babel.js'
            }
        }
    },
}