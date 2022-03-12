require('dotenv').config();

const schemaLocation = `${process.env.REACT_APP_API_GRAPHQL_API}/graphql`;

module.exports = {
  client: {
    service: {
      name: 'gateway',
      url: schemaLocation,
      skipSSLValidation: true,
    },
    excludes: ['**/generated/*'],
    includes: ['src/**/*.gql', 'src/**/*.ts', 'src/**/*.tsx'],
  },
};
