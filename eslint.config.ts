import js from '@eslint/js'
import stylisticPlugin from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vitestPlugin from '@vitest/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import { config as tseslintConfigFn, configs as tseslintConfigs } from 'typescript-eslint'

export default tseslintConfigFn([
  { ignores: ['dist'] },

  js.configs.recommended,
  tseslintConfigs.recommended,

  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  importPlugin.flatConfigs.errors,

  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      '@stylistic/explicit-module-boundary-types': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', {
        code: 100,
      }],
      '@stylistic/no-empty-function': 'off',
      '@stylistic/no-empty-interface': 'off',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/quotes': ['error', 'single'],
      'no-unused-vars': 'off',
      'sort-imports': 'off',
      'import/default': 'off',
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
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~', './src'],
          ],
          extensions: ['.ts', '.mts'],
        },
      },
    }
  },

  {
    files: ['tests/**/*.?(c|m){ts,tsx}'],

    ...vitestPlugin.configs.recommended,

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~', './src'],
          ],
          extensions: ['.ts', '.mts'],
        },
      },
    }
  },

  {
    files: ['eslint.config.ts', 'vitest.config.ts'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
])
