import { useTranslation } from 'react-i18next';

const usePublicPasswordTranslation = () => {
  const { t } = useTranslation('publicLink');

  const password = t('publicLink.password');
  const passwordTitle = t('publicLink.passwordTitle');
  const cancel = t('publicLink.buttons.cancel');
  const confirm = t('publicLink.buttons.confirm');

  return { password, passwordTitle, cancel, confirm };
};

export default usePublicPasswordTranslation;
