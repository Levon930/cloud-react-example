import { useTranslation } from 'react-i18next';

const useTeamMembersTranslation = () => {
  const { t } = useTranslation('shareModal');

  const stopShareSuccess = t('shareModal.temMembersShare.successMessage');
  const stopShareError = t('shareModal.temMembersShare.errorMessages.unshareMutation');
  const shareFolderError = t('shareModal.temMembersShare.errorMessages.shareFolderMutation');
  const addTeamMemberPlaceholder = t('shareModal.temMembersShare.placeholder');
  const inviteButton = t('shareModal.buttons.invite');
  const notification = t('shareModal.temMembersShare.notification');
  const owner = t('shareModal.temMembersShare.owner');
  const unshareButton = t('shareModal.buttons.unshare');
  const stopShareButton = t('shareModal.buttons.stopShare');
  const shareButton = t('shareModal.buttons.share');
  const closeButton = t('shareModal.buttons.close');

  return {
    stopShareSuccess,
    stopShareError,
    shareFolderError,
    addTeamMemberPlaceholder,
    inviteButton,
    notification,
    owner,
    unshareButton,
    stopShareButton,
    shareButton,
    closeButton,
  };
};
export default useTeamMembersTranslation;
