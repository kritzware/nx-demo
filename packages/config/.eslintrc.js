module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  ignorePatterns: ['**/dist/*'],
  plugins: ['@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    eqeqeq: 'warn',
    'no-plusplus': 'warn',
    'guard-for-in': 'warn',
    'no-mixed-operators': 'warn',
    'global-require': 'warn',
    'max-len': [
      'warn',
      {
        code: 250,
        comments: 5000,
        ignoreStrings: true,
      },
    ],
    'no-lonely-if': 'warn',
    'no-undef': 'warn',
    'no-useless-concat': 'warn',
    'new-cap': 'warn',
    'no-array-constructor': 'warn',
    'no-inner-declarations': 'warn',
    'no-prototype-builtins': 'warn',
    'no-nested-ternary': 'warn',
    'no-sequences': 'warn',
    'no-restricted-globals': 'warn',
    'no-return-assign': 'warn',
    'no-multi-assign': 'warn',
    'no-restricted-properties': 'warn',
    'no-control-regex': 'warn',
    'no-dupe-keys': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        array: false,
        object: true,
      },
    ],
    'prefer-spread': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'no-bitwise': 'warn',
    'no-buffer-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-unused-expressions': 'warn',
    'func-names': ['error', 'never'],
    'array-callback-return': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    radix: 'off',
    'no-empty': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['warn', { args: 'none' }],
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-restricted-syntax': [
      'warn',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|off|error|info|trace|time|timeEnd)$/]",
        message: 'Unexpected property on console object was called',
      },
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(trace|time|timeEnd)$/]",
        message:
          'Use @curveroyaltysystems/platform-shared-utils > logger[debug|info|error] ( [Mixed] )',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        mocha: true,
      },
      globals: {},
      rules: {
        'no-unused-expressions': 'off',
        'prefer-arrow-callback': 'off',
        'max-len': ['warn', { code: 200 }],
      },
    },
    {
      files: ['models/*.js'],
      rules: {
        'no-use-before-define': 'off',
        'global-require': 'off',
      },
    },
  ],
};
