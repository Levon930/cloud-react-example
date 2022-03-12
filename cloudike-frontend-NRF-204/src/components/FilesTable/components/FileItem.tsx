import React from 'react';

import { DataType } from '@components/FilesTable';
import ExtensionLogo from './ExtensionLogo';

import { Styled } from '../FileTable.styled';

const FileItem: React.FC<DataType> = ({ name, size, date }) => {
  return (
    <Styled.TableRow>
      <Styled.TableCell>
        <ExtensionLogo fileName={name} />
      </Styled.TableCell>
      <Styled.TableCell>{name}</Styled.TableCell>
      <Styled.TableCell align="right">{size}</Styled.TableCell>
      <Styled.TableCell align="right">{date.toLocaleString('en-GB')}</Styled.TableCell>
    </Styled.TableRow>
  );
};

export default FileItem;
