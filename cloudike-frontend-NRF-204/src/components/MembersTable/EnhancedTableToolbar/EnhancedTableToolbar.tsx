import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { EnhancedTableToolbarProps } from './EnhancedTableToolbar.types';

import { Styled } from './EnhancedTableToolbar.styled';

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = ({ onSearch }) => {
  const { t } = useTranslation('groupPage');

  return (
    <Styled.TableToolbar>
      <Styled.Input
        placeholder={t('addOrDelete.input')}
        onChange={onSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Styled.TableToolbar>
  );
};

export default EnhancedTableToolbar;
