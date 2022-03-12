import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export interface Props {
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}
