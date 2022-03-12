import * as React from 'react';
import { useTranslation } from 'react-i18next';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

import { TABLE_SELECT_ITEMS_PER_PAGE } from './SimpleTableToolbar.constants';
import { SimpleTableToolbarProps } from './SimpleTableToolbar.types';

import { Styled } from './SimpleTableToolbar.styled';

const SimpleTableToolbar = (props: SimpleTableToolbarProps) => {
  const { t } = useTranslation('table');
  const { numSelected, onChange, itemsPerPage, toolbarComponent } = props;
  const items = t('items');
  const selected = t('selected');

  // TODO: add navigation query string, remove useState of itemsPerPage
  // useEffect(() => {
  //   push({ search: `?folder=${currentPath}` });
  // }, [currentPath, push]);

  const handleOnChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    onChange(event.target.value as number);
  };

  return (
    <Styled.Toolbar>
      <Styled.ToolbarLeftArea>
        {numSelected > 0 && (
          <Styled.SelectedCount color="inherit">
            {numSelected} {selected}
          </Styled.SelectedCount>
        )}
      </Styled.ToolbarLeftArea>
      <Styled.ToolbarRightArea>
        <Select
          id="table-toolbar-select-native"
          value={itemsPerPage}
          onChange={handleOnChange}
          input={<InputBase />}
        >
          {TABLE_SELECT_ITEMS_PER_PAGE.map((value) => (
            <Styled.ToolbarMenuItem value={value}>
              {value} {items}
            </Styled.ToolbarMenuItem>
          ))}
        </Select>
        {toolbarComponent}
      </Styled.ToolbarRightArea>
    </Styled.Toolbar>
  );
};

export default SimpleTableToolbar;
