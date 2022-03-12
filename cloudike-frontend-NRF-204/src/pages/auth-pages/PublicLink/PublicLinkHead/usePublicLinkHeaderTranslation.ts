import { useTranslation } from 'react-i18next';

const usePublicLinkHeaderTranslation = () => {
  const { t } = useTranslation('publicLink');

  const headerAlt = t('publicLink.headerAlt');
  const signIn = t('publicLink.buttons.signIn');
  const signUp = t('publicLink.buttons.signUp');

  return { headerAlt, signIn, signUp };
};

export default usePublicLinkHeaderTranslation;
