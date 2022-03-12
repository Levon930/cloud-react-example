import React, { ChangeEvent, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useTrashQuery } from '@api';
import { FilesTable } from '@components/FilesTable';
import { Pagination } from '@components/Pagination';
import styled from '@emotion/styled';
import { convertData } from './TrashPage.utils';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const settings = {
  limit: 500,
  pagLimit: 5,
} as const;

const TrashPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { data, loading } = useTrashQuery({
    variables: {
      input: {
        limit: settings.pagLimit,
        extra: false,
        dirsOnly: false,
        offset,
      },
    },
  });

  const changeHandler = (e: ChangeEvent<HTMLDivElement>, page: number) => {
    setPage(page);
    setOffset(settings.pagLimit * (page - 1));
  };

  return (
    <>
      <h1>Recycle bin</h1>
      {loading ? (
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      ) : (
        <FilesTable header={{ stared: true, name: 'Trash table' }} data={convertData(data)} />
      )}
      <Pagination
        count={15}
        page={page}
        onChange={(e: ChangeEvent<any>, page) => changeHandler(e, page)}
      />
    </>
  );
};

export default TrashPage;
