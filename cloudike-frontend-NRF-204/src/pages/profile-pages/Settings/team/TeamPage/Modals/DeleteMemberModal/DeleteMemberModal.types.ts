import { CompanyList } from '@api';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type DeleteMemberProps = Readonly<{
  members: CompanyList[];
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;
