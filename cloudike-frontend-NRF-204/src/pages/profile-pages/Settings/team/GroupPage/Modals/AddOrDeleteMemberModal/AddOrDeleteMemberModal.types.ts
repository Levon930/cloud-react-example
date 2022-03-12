import { GroupsQuery } from '@api';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export interface AddOrDeleteModalProps {
  refetchGroups: (
    variables?: Partial<OperationVariables>,
  ) => Promise<ApolloQueryResult<GroupsQuery>>;
  AlternateGroupId: number;
}

export interface FormProps {
  setIsOpen?: (isOpen: boolean) => void;
  setSelected: React.Dispatch<React.SetStateAction<[] | number[]>>;
  selected: number[];
  tab: number;
  groupId: number;
}

export interface Tab {
  label: Readonly<string>;
  path: Readonly<string>;
}
