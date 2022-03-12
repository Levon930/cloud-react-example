module.exports = {
  overwrite: true,
  generates: {
    './src/generated/index.ts': {
      schema: './src/**/schema.graphql',
      plugins: ['typescript'],
      config: {
        skipTypename: true,
      },
    },
  },
};
