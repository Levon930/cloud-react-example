import { useTranslation } from 'react-i18next';

const useCompanyFolderShareTranslation = () => {
  const { t } = useTranslation('shareModal');

  const addFolderToCompanySharesToaster = t('shareModal.companyFolder.addFolderToCompanyShares');
  const addFolderToCompanySharesError = t('shareModal.companyFolder.error');
  const companyFolderInfo = t('shareModal.companyFolder.info');
  const releaseButton = t('shareModal.buttons.release');
  const closeButton = t('shareModal.buttons.close');
  const applyButton = t('shareModal.buttons.apply');

  return {
    addFolderToCompanySharesToaster,
    addFolderToCompanySharesError,
    companyFolderInfo,
    releaseButton,
    closeButton,
    applyButton,
  };
};

export default useCompanyFolderShareTranslation;
