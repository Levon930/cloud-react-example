import { List, ListItem, Typography } from '@material-ui/core';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './DocumentsViewerPopover.types';

const ListItemWrapper = styled(ListItem)<any>`
  ${({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${theme.palette.grey[200]};
  &:hover {
    color: ${theme.palette.grey[100]};
  }
  `}
`;

const ListWrapper = styled(List)<ItemWrapperPropsType>`
  ${({ theme }) => `
  width: 100%;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.07);
  border-radius: 2px;
  border: 1px solid ${theme.palette.grey[300]};
  padding: 10px 0;
  `}
`;

const DocumentsViewerText = styled(Typography)`
  line-height: 20px;
  font-size: 15px;
`;

export const Styled = {
  ListWrapper,
  ListItemWrapper,
  DocumentsViewerText,
};
