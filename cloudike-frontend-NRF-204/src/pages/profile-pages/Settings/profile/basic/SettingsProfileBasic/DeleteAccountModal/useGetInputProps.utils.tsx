import { DeleteReason } from './DeleteAccountModal.types';
import useDeleteAccountModalTranslation from './useDeleteAccountModalTranslation';

export const useGetInputProps = (
  deleteReason: DeleteReason | string,
): { name: string; placeholder: string; label: string } | null => {
  const {
    otherServiseLabel,
    otherServisePlaceholder,
    uncomfortableLabel,
    uncomfortablePlaceholder,
    othersLabel,
    othersPlaceholder,
  } = useDeleteAccountModalTranslation();

  if (deleteReason === DeleteReason.service)
    return {
      name: 'otherServise',
      label: otherServiseLabel,
      placeholder: otherServisePlaceholder,
    };
  if (deleteReason === DeleteReason.uncomfortable)
    return {
      name: 'uncomfortable',
      label: uncomfortableLabel,
      placeholder: uncomfortablePlaceholder,
    };
  if (deleteReason === DeleteReason.others)
    return {
      name: 'others',
      label: othersLabel,
      placeholder: othersPlaceholder,
    };

  return null;
};
