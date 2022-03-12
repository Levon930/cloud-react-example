import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useCompanyChangeUsersQuotaMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { initialValues } from './SetStorageSizeModal.constants';
import { SetStorageSizeProps } from './SetStorageSizeModal.types';
import { useValidationSchema } from './SetStorageSizeModal.validation';
import { SetStorageSizeModalForm } from './SetStorageSizeModalForm';

import { Styled } from '../Modal.styled';

const SetStorageSizeModal: React.FC<SetStorageSizeProps> = ({ refetch }) => {
  const { name, userid } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const { setIsOpen, RenderModal, isOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [changeQuota] = useCompanyChangeUsersQuotaMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberSetStorage) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async ({ quota_size }: FormikValues) => {
    const oneGb = 1073741824;
    try {
      if (userid) {
        changeQuota({
          variables: {
            user_ids: userid,
            quota_size: quota_size * oneGb,
          },
        }).then(() => {
          refetch().then(() => {
            push(`/${settingsPaths.teamMember}`);
          });
        });
      } else {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return changeQuota({
              variables: {
                user_ids: userid,
                quota_size: quota_size * oneGb,
              },
            });
          }),
        );
        await refetch();
        teamSelectedVar([]);
        push(`/${settingsPaths.teamMember}`);
      }
    } catch (e) {
      toaster(t('setStorageSizeModal.errorMessage'), 'error');
    }
  };

  return (
    <Modal
      title={`${t('setStorageSizeModal.titleStart')} ${name || 'users'}${t(
        'setStorageSizeModal.titleEnd',
      )}`}
    >
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <SetStorageSizeModalForm setIsOpen={setIsOpen} />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default SetStorageSizeModal;
