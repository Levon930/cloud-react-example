module.exports = {
  extends: ['airbnb-typescript', 'airbnb-typescript-prettier'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    'sort-imports': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'consistent-return': 0,
    'import/order': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-uses-react': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 1,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/aria-activedescendant-has-tabindex': 0,
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/aria-proptypes': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/aria-unsupported-elements': 0,
    'jsx-a11y/autocomplete-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/html-has-lang': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-access-key': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-distracting-elements': 0,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/no-redundant-roles': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/role-supports-aria-props': 0,
    'jsx-a11y/scope': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'no-console': 2,

    //will be turn on soon. See more https://eslint.org/docs/rules
    camelcase: 'off', //remove
    '@typescript-eslint/no-shadow': 'off', //remove
    '@typescript-eslint/no-explicit-any': 'off', //@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-unused-expressions': 'off', //remove
    'no-unused-expressions': 'off', //remove
    'import/no-cycle': 'off', //i'm lovin it, remove,
    'no-restricted-syntax': 'off', //remove
    'react/destructuring-assignment': 'off', //remove
    'no-cond-assign': 'off', //remove
    'import/export': 'off', //remove
    '@typescript-eslint/naming-convention': 'off', //remove
    'react/jsx-pascal-case': 'off', //remove
    '@typescript-eslint/no-use-before-define': 'off', //remove
    'no-return-assign': 'off', //remove
    'no-restricted-properties': 'off', //remove
    'import/no-named-default': 'off', //remove
    'no-fallthrough': 'off', //remove
    'react/no-unescaped-entities': 'off', //remove
    'no-param-reassign': 'off', //remove
    'react/button-has-type': 'off', //remove
    'import/no-named-as-default': 'off', //remove
  },
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['*.ts*'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^\\w', '^@material-ui/\\w'],
              [
                '^@?\\w',
                '^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)',
                '^\\.((?!styled).)*$',
              ],
            ],
          },
        ],
      },
    },
  ],
};
