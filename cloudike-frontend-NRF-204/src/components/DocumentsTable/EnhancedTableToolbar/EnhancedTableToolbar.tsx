import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileExpandedIcon, ListIcon } from '@components/SvgComponents';
import { documentExpandedVar } from '@store';
import { EnhancedTableToolbarProps } from './EnhancedTableToolbar.types';

import { Styled } from './EnhancedTableToolbar.styled';

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = ({
  numSelected,
  expanded,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleGoMainFolder,
  setPage,
}) => {
  const { t } = useTranslation('documents');

  const handleClick = () => {
    setPage(0);
    documentExpandedVar(!expanded);
  };

  return (
    <Styled.TableToolbar>
      <Styled.Title>
        <Styled.ClickableTypography
          variant="h6"
          id="tableTitle"
          component="div"
          onClick={handleGoMainFolder}
        >
          {t('title')}
        </Styled.ClickableTypography>
        {numSelected > 0 && (
          <Styled.TableTypography variant="subtitle1" component="div">
            {numSelected} {t('selected')}
          </Styled.TableTypography>
        )}
      </Styled.Title>
      <Styled.ToolBarContainer>
        <Styled.TableFormControl>
          <Styled.TableSelect
            id="demo-simple-select-outlined"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            native
          >
            <option value={5}>5 items</option>
            <option value={10}>10 items</option>
            <option value={15}>15 items</option>
          </Styled.TableSelect>
        </Styled.TableFormControl>
        <button onClick={handleClick}>{expanded ? <ListIcon /> : <FileExpandedIcon />}</button>
      </Styled.ToolBarContainer>
    </Styled.TableToolbar>
  );
};

export default EnhancedTableToolbar;
