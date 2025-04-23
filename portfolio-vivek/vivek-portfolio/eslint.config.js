export default {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'react-app',
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      // Add your custom rules here
    },
  };
  