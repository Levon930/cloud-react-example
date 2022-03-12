import { FormikValues } from 'formik';

import { CompanyList } from '@api';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type DeleteMemberProps = Readonly<{
  formValues: FormikValues;
  resetForm: () => void;
  members: CompanyList[];
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}>;
