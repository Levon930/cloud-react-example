import { Group } from '@api';

type MembersType = { value: string; type: string; groupId: string };

export type CustomizedMenusPropsType = {
  groups: Pick<Group, 'name' | 'group_id'>[];
  setMembers: (members: MembersType[]) => void;
  members: MembersType[];
};
