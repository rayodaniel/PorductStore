// eslint.config.js
import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import globals from 'globals'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import hooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import imprt from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import testingLibrary from 'eslint-plugin-testing-library'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  // Configuraciones base
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    }
  },
  reactRecommended,
  
  // Configuración principal
  {
    plugins: {
      '@next/next': next,
      'react-hooks': hooks,
      'jsx-a11y': jsxA11y,
      'import': imprt,
      'jest': jestPlugin,
      'testing-library': testingLibrary
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Reglas de Next.js
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      
      // Reglas personalizadas
      'import/named': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },

  // Configuración para tests
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...testingLibrary.configs.react,
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      ...jestPlugin.configs.recommended.rules
    }
  },

  // Archivos a ignorar
  {
    ignores: [
      '.next',
      'node_modules',
      'out',
      '*.config.js',
      'public'
    ]
  }
]