import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptESLint from '@typescript-eslint/eslint-plugin'
import typescriptESLintParser from '@typescript-eslint/parser'
import jestPlugin from 'eslint-plugin-jest'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

// @see https://github.com/eslint/eslintrc?tab=readme-ov-file#usage-esm
// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  ...compat.extends(
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ),
  ...compat.plugins('import'),
  {
    languageOptions: {
      parser: typescriptESLintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      typescriptESLint,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'sort-imports': 'off',
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['test/**/*.ts', 'jest.config.ts'],

    ...jestPlugin.configs['flat/recommended'],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,
    },
  },
  {
    files: ['eslint.config.mjs'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
