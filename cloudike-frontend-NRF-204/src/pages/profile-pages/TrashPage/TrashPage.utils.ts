import { TrashQuery } from '@api';
import { FilesTableProps } from '@components/FilesTable/FilesTable.types';

type ConvertData = (data: TrashQuery | undefined) => FilesTableProps['data'];

const convertSize = (size: number, folder: boolean) => {
  return !folder ? `${(size / 1048576).toFixed(2)}MB` : '';
};

export const convertData: ConvertData = (data) => {
  if (!data?.trash?.content) {
    return [];
  }

  const result = data?.trash?.content.map((item, key) => {
    if (!item) {
      return {
        name: '',
        size: 0,
        date: new Date(),
        id: '',
      };
    }
    const { name = '', bytes = 0, modified, folder } = item;

    return {
      name: name || '',
      size: convertSize(bytes || 0, folder || false) || '',
      date: new Date(modified || 0),
      id: key,
    };
  });

  return result;
};
