import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useChangeUserPermissionMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { ChangeAuthorityForm } from './ChangeAuthorityForm';
import { initialValues } from './ChangeAuthorityModal.constants';
import { ChangeAuthorityProps } from './ChangeAuthorityModal.types';
import { useValidationSchema } from './ChangeAuthorityModal.validation';

import { Styled } from '../Modal.styled';

const ChangeAuthorityModal: React.FC<ChangeAuthorityProps> = ({ refetch }) => {
  const {
    name,
    userid,
    allowed_ips,
    can_download,
    can_print,
    ip_restriction,
    pc_can_download,
    use_watermarks,
    user_mobile_restriction,
  } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { t } = useTranslation('teamPage');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [changePermission] = useChangeUserPermissionMutation();

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberDetailedAuthority) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
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
      if (userid) {
        changePermission({
          variables: {
            ip_restriction,
            allowed_ips,
            can_print: toBool(can_print),
            can_download: toBool(can_download),
            pc_can_download: toBool(pc_can_download),
            use_watermarks: toBool(use_watermarks),
            user_mobile_restriction: toBool(user_mobile_restriction),
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
            return changePermission({
              variables: {
                ip_restriction,
                allowed_ips,
                can_print: toBool(can_print),
                can_download: toBool(can_download),
                pc_can_download: toBool(pc_can_download),
                use_watermarks: toBool(use_watermarks),
                user_mobile_restriction: toBool(user_mobile_restriction),
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
      toaster(t('changeAuthorityModal.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={`${t('changeAuthorityModal.title')} ${name || 'users'}`}>
      <Styled.ModalContainer>
        <Formik
          initialValues={
            userid
              ? {
                  allowed_ips,
                  ip_restriction,
                  can_download: String(can_download),
                  can_print: String(can_print),
                  pc_can_download: String(pc_can_download),
                  use_watermarks: String(use_watermarks),
                  user_mobile_restriction: String(user_mobile_restriction),
                }
              : initialValues
          }
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <ChangeAuthorityForm setIsOpen={setIsOpen} />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default ChangeAuthorityModal;
