import React from 'react';

import { CommonListInput, SortOrder, useFavoritesQuery } from '@api';
import { SimpleTable, WithLoading } from '@components';
import { fileKeySelector } from '@utils';
import { useDocumentTableConfig } from './useDocumentTableTitles';

const defaultPagination = { page: 0, itemsPerPage: 500 };
const FavoritesFiles = () => {
  const { loading, data, refetch } = useFavoritesQuery({
    variables: {
      input: {
        sort: { orderBy: 'path', order: SortOrder.Asc },
        pagination: defaultPagination,
      },
    },
  });
  const headers = useDocumentTableConfig();

  const list = data?.favorites?.content || [];

  const handleOnChangeTable = (input: CommonListInput) => {
    refetch({
      input,
    });
  };

  // TODO add onSelect - fire change status of checkbox
  return loading ? (
    <WithLoading loading />
  ) : (
    <SimpleTable
      keySelector={fileKeySelector}
      rows={list}
      headers={headers}
      hasCheckbox
      // TODO discuss naming with Alex
      onChangeTable={handleOnChangeTable}
    />
  );
};

export default FavoritesFiles;
