import { useTranslation } from 'react-i18next';

const usePublicShareTranslation = () => {
  const { t } = useTranslation('shareModal');

  const createLinkPlaceholder = t('shareModal.createLink.placeholder');
  const successDelete = t('shareModal.createLink.successDelete');
  const errorDeleteMessage = t('shareModal.createLink.errorDeleteMessage');
  const errorMessage = t('shareModal.createLink.errorMessage');
  const viaLink = t('shareModal.viaLink.title');
  const onlyDownload = t('shareModal.viaLink.onlyDownload');
  const onlyUpload = t('shareModal.viaLink.onlyUpload');
  const expirationDate = t('shareModal.viaLink.expirationDate');
  const passwordOfLink = t('shareModal.viaLink.password');
  const limitOfLink = t('shareModal.viaLink.limit');
  const deleteButton = t('shareModal.buttons.delete');
  const applyButton = t('shareModal.buttons.apply');
  const options = t('shareModal.viaLink.options');

  return {
    createLinkPlaceholder,
    successDelete,
    errorDeleteMessage,
    errorMessage,
    viaLink,
    onlyDownload,
    onlyUpload,
    expirationDate,
    passwordOfLink,
    limitOfLink,
    deleteButton,
    applyButton,
    options,
  };
};

export default usePublicShareTranslation;
