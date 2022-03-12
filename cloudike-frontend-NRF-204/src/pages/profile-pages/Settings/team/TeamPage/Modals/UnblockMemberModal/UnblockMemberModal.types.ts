import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type UnblockMemberProps = Readonly<{
  initialValue?: boolean;
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;
