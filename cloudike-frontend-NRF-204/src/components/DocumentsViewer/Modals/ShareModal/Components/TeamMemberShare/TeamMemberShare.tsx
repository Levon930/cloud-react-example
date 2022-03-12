import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Formik } from 'formik';
import { Box, Button, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import {
  Collaborators,
  Group,
  Maybe,
  useGetCollaboratorsQuery,
  useGetGroupsQuery,
  useShareFolderMutation,
  useUnshareMutation,
} from '@api';
import { useReactiveVar } from '@apollo/client';
import { FormWrapper } from '@components';
import { FileDetailsSvg, StarIcon, UserIcon } from '@components/SvgComponents';
import { toaster } from '@helpers';
import { documentCurrentPathVar } from '@store';
import { paths as create_group_path } from '@utils/routes/settings-routes';
import { CustomizedMenus, SimpleSelect } from '..';
import { initialValues, SharePermissions } from './TeamMembers.constants';
import { MembersStateTypes, TeamMemberShareProps, ValuesType } from './TeamMemberShare.types';
import useTeamMembersTranslation from './useTeamMembersTranslation';

import { Styled } from '../ShareModalComponents.styled';

const TeamMemberShare: React.FC<TeamMemberShareProps> = ({ folderName }) => {
  const currentPath = useReactiveVar(documentCurrentPathVar);
  const { data } = useGetGroupsQuery();
  const [shareFolderMutation] = useShareFolderMutation();
  const [unshareMutation] = useUnshareMutation();
  const { data: collaboratorsData, refetch } = useGetCollaboratorsQuery({
    variables: { path: { path: `/${folderName}` } },
  });
  const {
    stopShareSuccess,
    stopShareError,
    shareFolderError,
    addTeamMemberPlaceholder,
    inviteButton,
    notification,
    owner,
    unshareButton,
    stopShareButton,
    shareButton,
    closeButton,
  } = useTeamMembersTranslation();

  const [collaboratorsList, setCollaboratorsList] = useState<
    Maybe<Pick<Collaborators, 'name' | 'owner'>>[]
  >([]);
  const [userGroups, setUserGroups] = useState<Pick<Group, 'name' | 'group_id'>[]>([]);
  const [members, setMembers] = useState<MembersStateTypes[]>([]);
  const [value, setValue] = useState('');

  const { push } = useHistory();

  useEffect(() => {
    if (collaboratorsData && collaboratorsData.collaborators) {
      setCollaboratorsList(collaboratorsData.collaborators);
    }
  }, [collaboratorsData]);

  useEffect(() => {
    if (data) {
      setUserGroups(data.groups.groups);
    }
  }, [data]);

  const closeModal = () => {
    push({ search: `?folder=${currentPath}` });
  };

  const createGroup = () => {
    push(create_group_path.teamGroupCreate);
  };

  const stopShare = async () => {
    try {
      await unshareMutation({
        variables: { path: { path: `/${folderName}` } },
      });
      toaster(stopShareSuccess, 'success');
    } catch (e) {
      toaster(stopShareError, 'error');
    }
  };

  const handleSubmit = async (values: ValuesType) => {
    const promises = members.map((item) => {
      const groupOrEmail = item.type === 'group' ? item.groupId : `email:${item.value}`;
      const dataUser = {
        path: `/${folderName}`,
        writer: values.sharePermissions === SharePermissions.readAndWrite,
        [item.type === 'group' ? 'group_id' : 'member_login']: groupOrEmail,
      };

      return shareFolderMutation({ variables: { input: dataUser } });
    });
    try {
      await Promise.allSettled(promises);
      refetch();
    } catch (e) {
      toaster(shareFolderError, 'error');
    }
  };

  const deleteMember = (item: MembersStateTypes) => {
    setMembers(members.filter((i) => i !== item));
  };

  const createNewGroup = () => {
    if (value.length) {
      const newGroup = [...members, { value, type: 'email', groupId: '' }];
      setMembers(newGroup);
      setValue('');
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createNewGroup();
    }
  };

  return (
    <>
      <Styled.Title>Invite user to {folderName}</Styled.Title>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validateOnChange validateOnBlur>
        {(formik) => (
          <Form>
            <FormWrapper>
              <Styled.FormRow>
                <Styled.InputContainer>
                  <Styled.MembersRow>
                    {members.map((item) => (
                      <Styled.MemberBox key={item.value}>
                        <span>{item.value}</span>
                        <button type="button" onClick={() => deleteMember(item)}>
                          <CloseIcon fontSize="small" />
                        </button>
                      </Styled.MemberBox>
                    ))}
                  </Styled.MembersRow>

                  <Input
                    name="member"
                    placeholder={addTeamMemberPlaceholder}
                    value={value}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setValue(e.target.value);
                    }}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                      createNewGroup();
                    }}
                    onKeyDown={handleKeyDown}
                  />
                </Styled.InputContainer>
                {userGroups.length ? (
                  <CustomizedMenus groups={userGroups} setMembers={setMembers} members={members} />
                ) : (
                  <Styled.InviteButton onClick={createGroup}>{inviteButton}</Styled.InviteButton>
                )}
              </Styled.FormRow>
              <Styled.NotifRow>
                <FileDetailsSvg />
                {notification}
              </Styled.NotifRow>
              <Styled.ShareSettingsContent>
                <Styled.OwnerRow>
                  <StarIcon />
                  {owner}
                </Styled.OwnerRow>
                <Styled.OwnerSettingsRow>
                  <Box>
                    {collaboratorsList.map((item) => {
                      if (!item?.owner) {
                        return (
                          <Styled.Row key={item?.name}>
                            <UserIcon />
                            {item?.name}
                          </Styled.Row>
                        );
                      }

                      return null;
                    })}
                  </Box>
                  <Styled.SelectWrapper>
                    <SimpleSelect name="sharePermissions" change={formik.handleChange} />
                    <Button color="primary">{unshareButton}</Button>
                  </Styled.SelectWrapper>
                </Styled.OwnerSettingsRow>
              </Styled.ShareSettingsContent>
              <Styled.ButtonsRow>
                <Button color="primary" variant="contained" onClick={stopShare}>
                  {stopShareButton}
                </Button>
                {members.length ? (
                  <Button color="primary" variant="contained" type="submit">
                    {shareButton}
                  </Button>
                ) : (
                  <Button color="secondary" variant="outlined" onClick={closeModal}>
                    {closeButton}
                  </Button>
                )}
              </Styled.ButtonsRow>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default TeamMemberShare;
