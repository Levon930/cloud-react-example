import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useRenameGroupMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { groupSelectedVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { ChangeGroupNameFrom } from './ChangeGroupNameFrom';
import { initialValues } from './ChangeGroupNameModal.constants';
import { Props } from './ChangeGroupNameModal.types';
import { useValidationSchema } from './ChangeGroupNameModal.validation';

import { Styled } from '../Modal.styled';

const ChangeGroupNameModal: React.FC<Props> = ({ refetch }) => {
  const groupSelected = useReactiveVar(groupSelectedVar);
  const { t } = useTranslation('groupPage');
  const validationSchema = useValidationSchema();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamGroup, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const [rename] = useRenameGroupMutation();
  const { push } = useHistory();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamGroupRename) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async (values: FormikValues) => {
    try {
      if (groupSelected.length) {
        await Promise.all(
          groupSelected.map(({ group_id }) => {
            return rename({
              variables: {
                name: values.groupName,
                group_id: group_id || 0,
              },
            });
          }),
        );
        await refetch();
        groupSelectedVar([]);
        push(`/${settingsPaths.teamGroup}`);
      }
    } catch (e) {
      toaster(t('changeGroupName.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={t('changeGroupName.title')}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <ChangeGroupNameFrom />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default ChangeGroupNameModal;
