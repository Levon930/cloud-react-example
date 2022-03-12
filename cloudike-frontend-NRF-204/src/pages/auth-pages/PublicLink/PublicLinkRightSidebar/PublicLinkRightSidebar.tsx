import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import { ChevronLeft, ChevronRight, CloudUpload } from '@material-ui/icons';

import { RightSidebarFooter } from '@layouts/Main/Footer';
import { PublicRightSidebarProps } from './PublicLinkRightSidebar.types';
import useRightSidebarTranslation from './useRightSidebarTranslation';

import { Styled } from '../PublicLink.styled';

const PublicLinkRightSidebar: React.FC<PublicRightSidebarProps> = ({
  open,
  handleDrawerRight,
  download,
}) => {
  const { downloadText, uploadText } = useRightSidebarTranslation();

  return (
    <Styled.RightSideBarContainer>
      <Styled.ButtonDrower onClick={handleDrawerRight}>
        {open ? <ChevronRight /> : <ChevronLeft />}
      </Styled.ButtonDrower>
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloudUpload />
          </ListItemIcon>
          <ListItemText>{download ? downloadText : uploadText}</ListItemText>
        </ListItem>
      </List>
      <RightSidebarFooter open={open} />
    </Styled.RightSideBarContainer>
  );
};

export default PublicLinkRightSidebar;
