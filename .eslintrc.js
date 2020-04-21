module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'react/jsx-filename-extension': [0],
        'import/extensions': ['error', 'ignorePackages', {
            'js': 'never',
            'jsx': 'never',
            'ts': 'never',
            'tsx': 'never',
        }],
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
