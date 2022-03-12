import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useCompanyUsersEnableMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { UnblockMemberProps } from './UnblockMemberModal.types';

import { Styled } from '../Modal.styled';

const UnblockMemberModal: React.FC<UnblockMemberProps> = ({ refetch }) => {
  const { name, userid } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [userEnable] = useCompanyUsersEnableMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberUnblock) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleUnblock = async () => {
    try {
      if (teamSelected.length) {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return userEnable({
              variables: {
                user_id: userid,
              },
            });
          }),
        );
        await refetch();
        teamSelectedVar([]);
        push(`/${settingsPaths.teamMember}`);
      } else {
        userid &&
          userEnable({
            variables: {
              user_id: userid,
            },
          }).then(() => {
            refetch().then(() => {
              push(`/${settingsPaths.teamMember}`);
            });
          });
      }
    } catch (e) {
      toaster(t('unblock.errorMessage'), 'error');
    }
  };

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Modal title={`${t('unblock.title')} ${name}`}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>{`${t('unblock.description')}`}</Styled.ModalDescription>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('unblock.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" onClick={handleUnblock}>
            {t('unblock.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default UnblockMemberModal;
