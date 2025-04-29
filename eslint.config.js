import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-expressions': [
        0,
        { allowShortCircuit: true, allowTernary: true }
    ],
      '@typescript-eslint/no-unused-vars': [
        0,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowArrowFunction: true,
          allowAnonymousClass: true,
          allowAnonymousFunction: true,
          allowCallExpression: true,
          allowLiteral: true,
          allowObject: true,
        },
      ],
      
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-undef': 'off',
        },
      },
    ],
    ignorePatterns: ['.eslintrc.js', 'next.config.js', 'tailwind.config.js', '.next',
      'node_modules',
      'out',
      '*.config.js',
      'src/__mocks__',
      'src/__tests__',
      'src/stories',
      'public'],

  }),
]

export default eslintConfig









