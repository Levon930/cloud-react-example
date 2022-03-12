import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');

  return Yup.object().shape({
    LDAPserver: Yup.string().required(t('form.second.LDAP.LDAPserver.validation.required')),
    LDAPserver389: Yup.string().required(t('form.second.LDAP.LDAPserver389.validation.required')),
    LDAPBaseDN: Yup.string().required(t('form.second.LDAP.LDAPBaseDN.validation.required')),
    LDAPEntry: Yup.string().required(t('form.second.LDAP.LDAPEntry.validation.required')),
  });
};
