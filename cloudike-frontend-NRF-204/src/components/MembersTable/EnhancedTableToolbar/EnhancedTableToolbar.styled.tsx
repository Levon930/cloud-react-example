import {
  FormControl,
  FormControlProps,
  Select,
  TextField,
  TextFieldProps,
  Toolbar,
  Typography,
} from '@material-ui/core';

import styled from '@emotion/styled';

const TableToolbar = styled(Toolbar)`
  padding: 0;
  .MuiTextField-root {
    width: 100%;
  }
`;
const TableTypography = styled(Typography)<any>`
  display: flex;
  flex: '1 1 100%';
`;

const ToolBarContainer = styled.div`
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

const StyledInput = styled(TextField)`
  > div {
    height: 40px;
    width: 100%;
  }
  .MuiOutlinedInput-adornedStart {
    padding-left: 7px;
  }
`;

const Input: React.FC<TextFieldProps> = (props) => <StyledInput {...props} variant="outlined" />;

export const Styled = {
  TableToolbar,
  ToolBarContainer,
  TableSelect,
  TableFormControl,
  TableTypography,
  Input,
};
