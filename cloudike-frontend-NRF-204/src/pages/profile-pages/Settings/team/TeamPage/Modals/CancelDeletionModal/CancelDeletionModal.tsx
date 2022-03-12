import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useCompanyCancelUserRemovingMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { CancelDeletionProps } from './CancelDeletionModal.types';

import { Styled } from '../Modal.styled';

const CancelDeletionModal: React.FC<CancelDeletionProps> = ({ refetch }) => {
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const { push } = useHistory();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  const [cancelRemoving] = useCompanyCancelUserRemovingMutation();

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberCancelDeletion) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleCancel = async () => {
    try {
      if (teamSelected.length) {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return cancelRemoving({
              variables: {
                user_id: userid,
              },
            });
          }),
        );
        await refetch();
        teamSelectedVar([]);
        push(`/${settingsPaths.teamMember}`);
      }
    } catch (e) {
      toaster(t('cancelDeletionModal.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={t('cancelDeletionModal.title')}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>{`${t(
          'cancelDeletionModal.description',
        )}`}</Styled.ModalDescription>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined">
            {t('cancelDeletionModal.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" onClick={handleCancel}>
            {t('cancelDeletionModal.buttons.apply')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default CancelDeletionModal;
