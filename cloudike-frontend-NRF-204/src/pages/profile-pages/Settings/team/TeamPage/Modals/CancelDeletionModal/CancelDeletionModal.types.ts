import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type CancelDeletionProps = Readonly<{
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;
