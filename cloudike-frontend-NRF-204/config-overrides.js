const path = require('path');

const {
  override,
  addBundleVisualizer,
  addBabelPreset,
  addBabelPlugin,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPlugin('@emotion/babel-plugin'),
  addWebpackAlias({
    ['@api']: path.resolve(__dirname, './src/generated/graphql'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@hooks']: path.resolve(__dirname, './src/hooks'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@assets']: path.resolve(__dirname, './src/assets'),
    ['@constants']: path.resolve(__dirname, './src/constants'),
    ['@layouts']: path.resolve(__dirname, './src/layouts'),
    ['@helpers']: path.resolve(__dirname, './src/helpers'),
    ['@store']: path.resolve(__dirname, './src/store'),
    ['@app']: path.resolve(__dirname, './src/app'),
  }),
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
);
