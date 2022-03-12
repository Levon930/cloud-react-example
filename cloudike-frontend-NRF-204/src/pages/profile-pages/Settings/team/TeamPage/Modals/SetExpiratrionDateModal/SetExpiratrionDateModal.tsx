import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useCompanyChangeUserExpiredMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { SetExpiratrionDateForm } from './SetExpiratrionDateForm';
import { initialValues } from './SetExpiratrionDateModal.constants';
import { SetExpiratrionDateProps } from './SetExpiratrionDateModal.types';
import { useValidationSchema } from './SetExpiratrionDateModal.validation';

import { Styled } from '../Modal.styled';

const SetExpiratrionDateModal: React.FC<SetExpiratrionDateProps> = ({ refetch }) => {
  const { name, userid } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const [changeExpired] = useCompanyChangeUserExpiredMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberSetExpirationDate) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async ({ deleteExpirationDate, expirationDateInput }: FormikValues) => {
    const expired = !deleteExpirationDate ? new Date(expirationDateInput).getTime() : 0;
    try {
      if (userid) {
        changeExpired({
          variables: {
            expired,
            user_id: userid,
          },
        }).then(() => {
          refetch().then(() => {
            push(`/${settingsPaths.teamMember}`);
          });
        });
      } else {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return changeExpired({
              variables: {
                expired,
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
      toaster(t('setExpiratrion.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={`${t('setExpiratrion.title')} ${name}`}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <SetExpiratrionDateForm setIsOpen={setIsOpen} />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default SetExpiratrionDateModal;
