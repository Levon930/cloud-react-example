import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useCompanyUsersDisableMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { BlockMemberProps } from './BlockMemberModal.types';

import { Styled } from '../Modal.styled';

const BlockMemberModal: React.FC<BlockMemberProps> = ({ refetch }) => {
  const { name, userid } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [userDisable] = useCompanyUsersDisableMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberBlock) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleBlock = async () => {
    try {
      if (teamSelected.length) {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return userDisable({
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
          userDisable({
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
      toaster(t('block.errorMessage'), 'error');
    }
  };

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Modal title={`${t('block.title')} ${name || 'users'}`}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>{`${t('block.description1')}`}</Styled.ModalDescription>
        <Styled.ModalDescription>{`${t('block.description2')}`}</Styled.ModalDescription>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('block.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" onClick={handleBlock}>
            {t('block.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default BlockMemberModal;
