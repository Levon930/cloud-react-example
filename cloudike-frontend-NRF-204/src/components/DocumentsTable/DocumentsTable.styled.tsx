import {
  Box,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  Container,
  Grid as MuiGrid,
  GridProps,
  Table,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import styled from '@emotion/styled';
import { FavoriteIconProps, ItemWrapperPropsType } from './DocumentsTable.types';

const DropzoneWrapper = styled(Box)`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-image: url('/assets/emptyFolder.png');
  background-size: 60% 60%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .MuiDropzoneArea-root {
    background: none;
  }
  & .dropzone {
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .dropzone-paragraph {
    margin: 0;
  }
  & .dropzone-preview-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    margin: 0;
  }
  & .dropzone-preview-items {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .dropzone-preview-items button {
    top: 5px;
    right: -20px;
  }
  .MuiSvgIcon-root {
    display: none;
  }
`;

const TableComponent = styled(Table)`
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
`;

const Pagination = styled(TablePagination)<any>`
  display: block;
  .MuiToolbar-root {
    justify-content: flex-end;
    > p:first-of-type {
      display: none;
    }
    > div:nth-of-type(-n + 2) {
      display: none;
    }
  }
`;
const EmptyFolder = styled(Box)`
  background-image: url('/assets/emptyFolder.png');
  background-size: 100% 100%;
  background-position: center;
`;

const FirstTitle = styled(Box)`
  font-size: 24px;
  text-align: center;
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
`;

const SecondTitle = styled(Box)`
  font-size: 14px;
  text-align: center;
  position: absolute;
  bottom: 55px;
  left: 0;
  right: 0;
`;

const ClickableTableCell = styled(TableCell)`
  display: flex;
  padding: 16px;
  &:hover {
    > div {
      opacity: 1;
    }
  }
`;

const Row = styled(TableRow)<ItemWrapperPropsType>`
  cursor: pointer;
  height: ${({ emptyRows }) => (emptyRows ? `${53 * emptyRows}px` : '53px')};
  &.Mui-selected {
    ${({ theme }) => `
  background-color: ${theme.palette.primaryWithOpacity[200]};
`}
  }
  &.Mui-selected:hover {
    ${({ theme }) => `
  background-color: ${theme.palette.primaryWithOpacity[400]};
`}
  }
`;

const Checkbox: React.FC<CheckboxProps> = (props) => <MuiCheckbox {...props} color="primary" />;

const Grid = styled(MuiGrid)`
  > div {
    padding-bottom: 11rem;
    width: 10rem;
    height: 10rem;
  }
`;
const GridWrapper: React.FC<GridProps> = ({ ...props }) => (
  <MuiGrid container spacing={1} {...props} />
);

const GridComponent = styled(Container)<{ itemsPerPage: number }>`
  width: 100%;
  overflow: hidden;
  max-width: none;
  margin-top: 1rem;
  > div {
    min-height: ${({ itemsPerPage }) => `${(itemsPerPage / 6) * 12}rem`};
    min-width: 61rem;
  }
`;

const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Favorite = styled(Box)<FavoriteIconProps>`
  margin-left: 5px;
  opacity: ${({ isFavorite }) => (isFavorite ? 1 : 0)};
  > svg {
    margin-top: 5px;
    width: 20px;
    height: 20px;
  }
`;

export const Styled = {
  TableComponent,
  Pagination,
  Row,
  Checkbox,
  ClickableTableCell,
  DropzoneWrapper,
  EmptyFolder,
  FirstTitle,
  SecondTitle,
  Grid,
  GridWrapper,
  GridComponent,
  IconWrapper,
  NameWrapper,
  Favorite,
};
