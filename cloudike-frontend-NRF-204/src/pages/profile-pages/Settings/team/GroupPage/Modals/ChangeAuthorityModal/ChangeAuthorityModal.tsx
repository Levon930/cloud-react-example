import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useChangeGroupPermissionMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { groupSelectedVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { ChangeAuthorityForm } from './ChangeAuthorityForm';
import { initialValues } from './ChangeAuthorityModal.constants';
import { Props } from './ChangeAuthorityModal.types';
import { useValidationSchema } from './ChangeAuthorityModal.validation';

import { Styled } from '../Modal.styled';

const ChangeAuthorityModal: React.FC<Props> = ({ refetch }) => {
  const groupSelected = useReactiveVar(groupSelectedVar);
  const { t } = useTranslation('groupPage');
  const validationSchema = useValidationSchema();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamGroup, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const { push } = useHistory();

  const [changePermission] = useChangeGroupPermissionMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamGroupChangeAuthority) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async ({
    can_print,
    allowed_ips,
    can_download,
    ip_restriction,
    pc_can_download,
    use_watermarks,
    user_mobile_restriction,
  }: FormikValues) => {
    const toBool = (val: string) => val === 'true';
    try {
      await Promise.all(
        groupSelected.map(({ group_id }) => {
          return changePermission({
            variables: {
              ip_restriction,
              allowed_ips,
              can_print: toBool(can_print),
              can_download: toBool(can_download),
              pc_can_download: toBool(pc_can_download),
              use_watermarks: toBool(use_watermarks),
              user_mobile_restriction: toBool(user_mobile_restriction),
              group_id: group_id || 0,
            },
          });
        }),
      );
      await refetch();
      groupSelectedVar([]);
      push(`/${settingsPaths.teamGroup}`);
    } catch (e) {
      toaster(t('changeAuthority.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={`${t('changeAuthority.title')} ${'groups'}`}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>{t('changeAuthority.description')}</Styled.ModalDescription>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <ChangeAuthorityForm />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default ChangeAuthorityModal;
