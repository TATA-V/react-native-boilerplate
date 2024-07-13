module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'ignorePatterns': ['.eslintrc.js', 'tailwind.config.js', 'README.md', 'tsconfig.json']
  },
};
