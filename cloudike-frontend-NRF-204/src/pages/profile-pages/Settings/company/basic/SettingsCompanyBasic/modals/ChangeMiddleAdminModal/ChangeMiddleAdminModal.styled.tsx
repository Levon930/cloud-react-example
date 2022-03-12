import { Box, Button, InputBase, TableCell as MuiTableCell } from '@material-ui/core';

import styled from '@emotion/styled';

const Link = styled.a`
  text-decoration: none;
`;

const OpenModal = styled(Button)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    margin: 0;
    font-size: 0.8rem;
    text-transform: initial;
  `}
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const ModalInfo = styled(Box)`
  display: flex;
  max-width: 49vw;
  padding: 10px;
`;

const TableCell = styled(MuiTableCell)`
  width: 25px;
  padding: 0;
`;

const TableCellBox = styled(MuiTableCell)`
  padding: 0;
`;

const Input = styled(InputBase)`
  label + & {
    margin-top: 1.5rem;
  }
  input {
    width: auto;
    position: relative;
    &:focus {
      border-color: ${({ theme }) => theme.palette.yellow[100]};
    }
  }
  &.Mui-error {
    input {
      border-color: red; // TODO: add to palette and use theme
    }
  }
`;

const SearchContainer = styled(Box)`
  margin-left: 10px;
  display: flex;
  flex: 1;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  width: auto;
  max-width: 40%;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease-in-out;
`;

export const Styled = {
  Link,
  OpenModal,
  ButtonWrapper,
  ModalInfo,
  TableCell,
  TableCellBox,
  Input,
  SearchContainer,
};
