module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
<<<<<<< HEAD
    'no-useless-escape': 'off',
    'linebreak-style': 'off',
    'global-require': 'off',
=======
    'no-useless-escape': "off",
    'linebreak-style': "off",
    "no-restricted-syntax": "off"
>>>>>>> 005088ee091cf0dc0eb994a924bcdc9316232a5a
  },
};
