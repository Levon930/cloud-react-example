import { useTranslation } from 'react-i18next';

const useSimpleSelectTranslation = () => {
  const { t } = useTranslation('shareModal');

  const readAndWrite = t('shareModal.temMembersShare.readAndWrite');
  const read = t('shareModal.temMembersShare.read');

  return { readAndWrite, read };
};
export default useSimpleSelectTranslation;
