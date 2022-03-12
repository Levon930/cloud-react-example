import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { toaster } from '@helpers';
import { removeToken } from '@hooks/useAuth/useAuth.utils';
import { paths } from '@utils/routes/profile-routes';
import { ApolloProviderProps } from './ApolloProvider.types';

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_GRAPHQL_API}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      ...(token && { Authorization: token }),
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      toaster(err.message, 'error');

      switch (err.extensions?.code) {
        case 'UNAUTHENTICATED':
          removeToken();
          window.location.replace(paths.home);
          break;
        case 'INTERNAL_SERVER_ERROR':
          toaster('INTERNAL_SERVER_ERROR', 'error');
          break;
        default:
          toaster(`Error in ${operation.operationName}`, 'error');
          break;
      }
    }
    if (networkError) {
      toaster('Network error', 'error');
    }
  }
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
});

const ApolloProviderComponent = ({ children }: ApolloProviderProps): JSX.Element => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderComponent;
