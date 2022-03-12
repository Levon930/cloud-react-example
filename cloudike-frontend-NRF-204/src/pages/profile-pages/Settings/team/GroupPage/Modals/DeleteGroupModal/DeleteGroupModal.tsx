import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useDeleteGroupMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { groupSelectedVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { Props } from './DeleteGroupModal.types';

import { Styled } from '../Modal.styled';

const DeleteGroupModal: React.FC<Props> = ({ refetch }) => {
  const groupSelected = useReactiveVar(groupSelectedVar);
  const { t } = useTranslation('groupPage');
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamGroup, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [deleteGroup] = useDeleteGroupMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamGroupDelete) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleDelete = async () => {
    try {
      if (groupSelected.length) {
        await Promise.all(
          groupSelected.map(({ name }) => {
            return deleteGroup({
              variables: {
                name: name || '',
              },
            });
          }),
        );
        await refetch();
        groupSelectedVar([]);
        push(`/${settingsPaths.teamGroup}`);
      }
    } catch (e) {
      toaster(t('deleteGroup.errorMessage'), 'error');
    }
  };

  const handleBack = () => {
    push(`/${settingsPaths.teamGroup}`);
  };

  return (
    <Modal title={t('deleteGroup.title')}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>
          {`${t('deleteGroup.description')} ${'groups'} ?`}
        </Styled.ModalDescription>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('deleteGroup.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" onClick={handleDelete}>
            {t('deleteGroup.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default DeleteGroupModal;
