import { useTranslation } from 'react-i18next';

const useShareModalTranslation = () => {
  const { t } = useTranslation('shareModal');

  const shareWithTeamLabel = t('shareModal.shareWithTeam');
  const shareLinklabel = t('shareModal.shareLink');
  const designateLabel = t('shareModal.designate');

  return { shareWithTeamLabel, shareLinklabel, designateLabel };
};

export default useShareModalTranslation;
