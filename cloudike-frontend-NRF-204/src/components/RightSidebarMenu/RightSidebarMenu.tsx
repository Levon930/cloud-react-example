import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { SidebarProps } from './RightSidebarMenu.types';

import { Styled } from './RightSidebarMenu.styled';

/**
 * create sidebar folder and it to there
 * rewrite
 */
const RightSidebarMenu: React.FC<SidebarProps> = ({ menuItemsArray }) => {
  let upload: HTMLInputElement | null = null;
  const onChange = (dialog: (files: any) => void) => {
    return ({ target }: React.ChangeEvent) => {
      const { files } = target as HTMLInputElement;
      const filesArray = Array.from(files || []);
      if (filesArray.every((file) => file.size <= 200000000)) dialog(filesArray);
    };
  };

  return (
    <>
      {menuItemsArray.map(({ disabled = false, onClick, name, Icon, dialog }) => (
        <ListItem
          button
          onClick={() => {
            name === 'Upload' && upload && upload.click();
            onClick && onClick();
          }}
          key={name}
          disabled={disabled}
        >
          {!!dialog && (
            <Styled.HiddenFileInput
              type="file"
              ref={(ref) => (upload = ref)}
              onChange={onChange(dialog)}
              multiple
            />
          )}
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
        </ListItem>
      ))}
    </>
  );
};
export default RightSidebarMenu;
