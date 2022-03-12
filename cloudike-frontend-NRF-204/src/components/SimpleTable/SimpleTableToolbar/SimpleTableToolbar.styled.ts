import { Box, Toolbar as MuiToolbar, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import styled from '@emotion/styled';

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: flex-start;
  min-height: 0;
`;
const ToolbarLeftArea = styled.div`
  flex: 1;
`;

const ToolbarMenuItem = styled(MenuItem)`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

// TODO discuss gap with Alex. maybe global values
const ToolbarRightArea = styled(Box)`
  display: flex;
  gap: 1.25rem;
`;

// TODO change when global sizes variables will be ready. Discuss with Alex
const SelectedCount = styled(Typography)``;

export const Styled = {
  Toolbar,
  SelectedCount,
  ToolbarRightArea,
  ToolbarLeftArea,
  ToolbarMenuItem,
};
