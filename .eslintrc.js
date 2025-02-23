module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    'plugins': [
        'no-null',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'PIXI': 'readonly',
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'rules': {
        'no-null/no-null': 'error',
        'max-len': ['error', { 'code': 120 }],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'import/no-cycle': 'error',
        'max-classes-per-file': 'error',
        'prefer-template': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'quotes': ['error', 'single'],
        'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'none' } }],
        'no-extra-semi': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-lonely-if': 'error',
        'no-floating-decimal': 'error',
        'consistent-return': 'error',
        'no-multi-assign': 'error',
        'space-infix-ops': 'error',
        'space-in-parens': ['error', 'never'],
        'no-console': 'warn',
        'no-debugger': 'error',
        'eqeqeq': 'error',
        'keyword-spacing': 'error',
        'no-whitespace-before-property': 'error',
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'import/no-default-export': 'error',

        'no-case-declarations': 'off',
        'dot-notation': 'off',
    },
};
