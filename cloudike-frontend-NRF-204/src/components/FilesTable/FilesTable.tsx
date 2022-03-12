import React from 'react';

import { StarSmallIcon } from '@components/SvgComponents';
import FileItem from './components/FileItem';
import { FilesTableProps } from './FilesTable.types';

import { Styled } from './FileTable.styled';

/**
 * @deprecated use simpleTable
 */
const FilesTable: React.FC<FilesTableProps> = ({ header, data }) => {
  return (
    <Styled.TableContainer>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableCell>
            <Styled.Star isActive={header.stared}>
              <StarSmallIcon />
            </Styled.Star>
            <Styled.HeadTitle>{header.name}</Styled.HeadTitle>
          </Styled.TableCell>
        </Styled.TableHead>
        <Styled.TableBody>
          {data?.map((row) => (
            <FileItem key={row.id} name={row.name} size={row.size} date={row.date} />
          ))}
        </Styled.TableBody>
      </Styled.Table>
    </Styled.TableContainer>
  );
};

export default FilesTable;
