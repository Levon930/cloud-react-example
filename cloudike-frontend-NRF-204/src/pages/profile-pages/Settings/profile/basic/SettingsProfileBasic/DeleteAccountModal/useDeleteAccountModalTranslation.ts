import { useTranslation } from 'react-i18next';

const useDeleteAccountModalTranslation = () => {
  const { t } = useTranslation('deleteAccountModal');

  const otherServiseLabel = t('form.otherServise.label');
  const otherServisePlaceholder = t('form.otherServise.placeholder');
  const uncomfortableLabel = t('form.uncomfortable.label');
  const uncomfortablePlaceholder = t('form.uncomfortable.placeholder');
  const othersLabel = t('form.others.label');
  const othersPlaceholder = t('form.others.placeholder');
  const title = t('form.title');

  return {
    otherServiseLabel,
    otherServisePlaceholder,
    uncomfortableLabel,
    uncomfortablePlaceholder,
    othersLabel,
    othersPlaceholder,
    title,
  };
};

export default useDeleteAccountModalTranslation;
