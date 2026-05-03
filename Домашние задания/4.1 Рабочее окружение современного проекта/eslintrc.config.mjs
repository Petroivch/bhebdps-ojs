import js from '@eslint/js';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: ['coverage/**', 'dist/**', 'eslintrc.config.mjs'],
  },
  js.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
];
