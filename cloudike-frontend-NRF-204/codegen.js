require('dotenv').config();

const schemaLocation = `${process.env.REACT_APP_API_GRAPHQL_API}/graphql`;

module.exports = {
  schema: [
    {
      [schemaLocation]: {
        // "headers": {
        //     "Authorization": "Bearer " + process.env.AUTH_TOKEN
        // }
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    // './src/generated/fragmentTypes.json': {
    //   plugins: ['fragment-matcher'],
    // },
  },
};
