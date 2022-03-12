import { FormikValues } from 'formik';

import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type InviteMemberProps = Readonly<{
  open: boolean;
}>;

export type HandleSubmitArgs = (values: FormikValues, formik: FormikValues) => void;

export interface FormProps {
  setIsOpen: (isOpen: boolean) => void;
  emails: string[];
  setEmails: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface Props {
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}
