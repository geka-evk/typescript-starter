import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    env: {
      node: true,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single', { allowTemplateLiterals: false }],
      indent: ['error', 2, { SwitchCase: 1 }],
      semi: ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
    },
  },
  {
    files: ['test/**/*.ts'],
    env: {
      jest: true,
    },
    rules: {
      // add here any rules specific to test files
    },
  },
  prettier,
];
