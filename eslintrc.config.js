module.exports = [
  {
    files: ['src/**/*.js'],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:react/jsx-runtime',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'prettier/prettier': 'error',
    },
  },
];
