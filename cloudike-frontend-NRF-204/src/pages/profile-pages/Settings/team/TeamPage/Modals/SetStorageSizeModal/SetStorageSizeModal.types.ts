import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type SetStorageSizeProps = Readonly<{
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;

export interface FormProps {
  setIsOpen: (isOpen: boolean) => void;
}
