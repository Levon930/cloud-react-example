import { useTranslation } from 'react-i18next';

import { Document } from '@api';
import { formatDate } from '@utils';
import SetFavoriteTableCell from './SetFavoriteTableCell';

export const useDocumentTableConfig = () => {
  const { t } = useTranslation('documents');

  return [
    {
      label: t('tableTitle.name'),
      sortable: true,
      id: 'path',
      width: '40%',
      renderCell: SetFavoriteTableCell,
    },
    { label: t('tableTitle.teamFolderName'), id: 'ownerName', width: '30%' },
    { label: t('tableTitle.size'), id: 'bytes', width: '15%' },
    {
      label: t('tableTitle.modified'),
      id: 'modified',
      renderCell: (item: Document) => formatDate(Number(item.modified)),
      width: '15%',
    },
  ];
};
