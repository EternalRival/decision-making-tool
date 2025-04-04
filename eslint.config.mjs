import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', '*.{config,setup}.*'] },
  { files: ['**/*.{ts,tsx}'] },
  { settings: { react: { version: '18.3' } } },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { linterOptions: { noInlineConfig: true, reportUnusedDisableDirectives: 'error' } },

  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs['flat/recommended'],

  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'off' } },
      ],
      '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    rules: {
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            acc: true,
            args: true,
            ctx: true,
            env: true,
            i: true,
            j: true,
            props: true,
            Props: true,
            ref: true,
            Ref: true,
          },
        },
      ],
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'case', 'default', 'block', 'block-like', 'multiline-block-like', 'interface', 'type'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type', 'function', 'export'],
        },
      ],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: true,
          multiline: 'last',
          reservedFirst: false,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.{ts,tsx}'],
    rules: {
      '@typescript-eslint/dot-notation': 'off',
    },
  }
);
