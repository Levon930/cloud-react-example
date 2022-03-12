import { ReactChild } from 'react';

import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type RenderModalType = {
  children: ReactChild;
  title?: string;
};

export interface ModalProps {
  initialValue?: boolean;
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}

export interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: 'string' | 'password';
}

export interface ButtonProps {
  disabled: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface FormProps {
  setIsOpen: (isOpen: boolean) => void;
}
