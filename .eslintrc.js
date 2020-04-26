module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
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
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "camelcase": ["error", { "ignoreDestructuring": true }],
    "no-useless-constructor": "off",
    "no-empty-function": ["error", { allow: ["constructors"] }],
    "class-methods-use-this": ["error", { "exceptMethods": ["show", "store", "update", "delete", "init"] }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "next", "varsIgnorePattern": "database" }],
  },
};
