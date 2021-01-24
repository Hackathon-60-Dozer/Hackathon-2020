module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'react-app',
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-console': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['pages/api/**/*.ts'],
      rules: {
        'import/no-anonymous-default-export': 0,
      },
    },
  ],
  ignorePatterns: ['node_modules/', '.next/'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.d.ts'],
      },
      'babel-module': {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
