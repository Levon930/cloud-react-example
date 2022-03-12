import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useCompanyRemoveUserMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { DeleteMemberForm } from './DeleteMemberForm';
import { initialValues } from './DeleteMemberModal.constants';
import { DeleteMemberProps } from './DeleteMemberModal.types';
import { validationSchema } from './DeleteMemberModal.validation';

import { Styled } from '../Modal.styled';

const DeleteMemberModal: React.FC<DeleteMemberProps> = ({ members, refetch }) => {
  const { t } = useTranslation('teamPage');
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);
  const { search } = useLocation();
  const { push } = useHistory();

  const query = useMemo(() => new URLSearchParams(search), [search]);
  const realMembers = useMemo(() => members.filter((member) => member.logins), [members]);

  const [removeUser] = useCompanyRemoveUserMutation();

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberDelete) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async (values: FormikValues) => {
    try {
      await Promise.all(
        teamSelected.map(({ userid }) => {
          return removeUser({
            variables: {
              auto_remove: false,
              need_wipe: 'False',
              transfer_file: values.transfer_file,
              transfer_login: values.transfer_login,
              user_id: userid,
            },
          });
        }),
      );
      await refetch();
      teamSelectedVar([]);
      push(`/${settingsPaths.teamMember}`);
    } catch (e) {
      toaster(t('deleteMember.errorMessage'), 'error');
    }
  };

  return (
    <Modal
      title={`${t('deleteMember.title')} ${
        teamSelected.length === 1 ? teamSelected[0].name : 'users'
      } ?`}
    >
      <Styled.ModalContainer>
        <Styled.ModalDescription>
          {t('deleteMember.description')}
          <ul>
            <li>{t('deleteMember.description1')}</li>
            <li>{t('deleteMember.description2')}</li>
            <li>{t('deleteMember.description3')}</li>
            <li>{t('deleteMember.description4')}</li>
          </ul>
        </Styled.ModalDescription>
        <Formik
          initialValues={{
            ...initialValues,
            transfer_login: realMembers[0]?.logins && realMembers[0].logins[0],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          {({ values, resetForm }) => {
            return (
              <DeleteMemberForm
                formValues={values}
                resetForm={resetForm}
                members={realMembers}
                refetch={refetch}
              />
            );
          }}
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default DeleteMemberModal;
