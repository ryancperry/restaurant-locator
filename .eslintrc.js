module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react-hooks'],
  globals: {
    document: true,
    window: true,
    process: false,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'consistent-return': 0,
    'no-mixed-spaces-and-tabs': 0,
    'max-len': 0,
    'no-console': 0,
    radix: 0,
    'one-var': 0,
    'react/jsx-indent': 0,
    'no-tabs': 0,
    'import/first': 0,
    'react/no-danger': 0,
    'no-mixed-operators': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-nested-ternary': 0,
    'no-prototype-builtins': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
