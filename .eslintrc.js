module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': 'off',
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    'no-case-declarations': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'warn',
    'no-empty': 'warn',
    'no-fallthrough': 'warn',
    'no-global-assign': 'warn',
    'no-misleading-character-class': 'off',
    'no-prototype-builtins': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'warn',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        endOfLine: 'auto',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],
    quotes: ['error', 'single'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off'
  }
};
