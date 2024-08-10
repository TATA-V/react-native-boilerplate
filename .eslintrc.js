module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['README.md', '.eslintrc.js', 'tsconfig.json'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'max-len': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'no-alert': 'off',
    'curly': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned'
    ],
    'prettier/prettier': ['error',
      {
        printWidth: 150,
        bracketSpacing: true,
      }
    ],
  },
};
