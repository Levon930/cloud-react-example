import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Maybe, useDeleteGroupUsersMutation, useInviteGroupUsersMutation } from '@api';
import { MembersTable, SettingsTabs } from '@components';
import { useModal, useQueryParams } from '@hooks';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { AddOrDeleteModalProps, Tab } from './AddOrDeleteMemberModal.types';

import { Styled } from '../Modal.styled';

const AddOrDeleteMemberModal: React.FC<AddOrDeleteModalProps> = ({
  refetchGroups,
  AlternateGroupId,
}) => {
  const { t } = useTranslation('groupPage');
  const { push } = useHistory();
  const [selected, setSelected] = useState<number[] | []>([]);
  const { RenderModal, isOpen } = useModal();

  const queryParams = useQueryParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const [inviteGroupUsers] = useInviteGroupUsersMutation();
  const [deleteGroupUsers] = useDeleteGroupUsersMutation();
  const [value, setValue] = useState(0);

  const tabs: Tab[] = [
    { label: t('addOrDelete.tab1'), path: settingsPaths.teamGroupInviteMember },
    { label: t('addOrDelete.tab2'), path: settingsPaths.teamGroupDeleteMember },
  ];

  const handleSubmit = async () => {
    if (!value) {
      await inviteGroupUsers({
        variables: {
          groupId: takeGroupId(),
          data: selected,
        },
      });
      await refetchGroups();
      push(`/${settingsPaths.teamGroup}`);
    } else {
      await deleteGroupUsers({
        variables: {
          groupId: takeGroupId(),
          data: selected,
        },
      });
      await refetchGroups();
      push(`/${settingsPaths.teamGroup}`);
    }
  };

  const takeGroupId = (): number => {
    const id: Maybe<string> = queryParams.get('groupId');
    if (id !== null) {
      return Number(id);
    }

    return AlternateGroupId;
  };

  return (
    <Modal title={`${t('addOrDelete.title')}`}>
      <Styled.ModalContainer>
        <SettingsTabs tabs={tabs} value={value} setValue={setValue} groupId={takeGroupId()} />
        <Styled.ModalFromContainer>
          <MembersTable
            tab={value}
            setSelected={setSelected}
            selected={selected}
            groupId={takeGroupId()}
          />
        </Styled.ModalFromContainer>
        <Styled.ButtonContainer>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={!selected.length}
            onClick={handleSubmit}
          >
            {!value ? t('addOrDelete.buttonInvite') : t('addOrDelete.buttonDelete')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default AddOrDeleteMemberModal;
