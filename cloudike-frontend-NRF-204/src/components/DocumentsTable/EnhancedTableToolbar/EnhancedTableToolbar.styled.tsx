import { Box, FormControl, FormControlProps, Select, Toolbar, Typography } from '@material-ui/core';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './EnhancedTableToolbar.types';

const TableToolbar = styled(Toolbar)`
  justify-content: space-between;
`;
const TableTypography = styled(Typography)<any>`
  display: flex;
  flex: '1 1 100%';
`;

const ClickableTypography = styled(Typography)<any>`
  display: flex;
  flex: '1 1 100%';
  cursor: pointer;
`;

const ToolBarContainer = styled.div<ItemWrapperPropsType>`
  display: flex;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.palette.grey[200]};
  }
  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: 23px;
    border: none;
    background-color: transparent;
    padding: 3px;
  }
`;

const TableSelect = styled(Select)`
  height: 40px;
  margin-top: 15px;
  .MuiInputBase-input {
    padding: 9px 7px;
  }
`;

const StyledFormControl = styled(FormControl)`
  min-width: 120px;
  margin: 7px;
`;

const TableFormControl: React.FC<FormControlProps> = ({ children, ...props }) => (
  <StyledFormControl {...props} variant="outlined">
    {children}
  </StyledFormControl>
);

const Title = styled(Box)``;

export const Styled = {
  TableToolbar,
  ToolBarContainer,
  TableSelect,
  TableFormControl,
  TableTypography,
  ClickableTypography,
  Title,
};
