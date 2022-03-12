import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type BlockMemberProps = Readonly<{
  initialValue?: boolean;
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;
