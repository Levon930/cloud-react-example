import { CreateUserInput } from '@api';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type Values = CreateUserInput & {
  expirationDate?: boolean;
  expirationDateInput: string;
};

export interface FormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export interface Props {
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}
