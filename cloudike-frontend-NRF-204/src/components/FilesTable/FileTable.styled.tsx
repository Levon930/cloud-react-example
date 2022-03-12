import { ListItemIcon, Theme } from '@material-ui/core';

import styled from '@emotion/styled';

const TableContainer = styled.div``;

const Table = styled.div`
  display: grid;
  grid-gap: 0.1rem;
`;

const TableHead = styled.div`
  display: grid;
`;

const TableBody = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 5% 65% 15% 15%;
  grid-template-rows: 4rem;
  border-top: 0.1rem solid #d9d9d9;
`;

const TableCell = styled.div<{ align?: string }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-self: ${({ align }) => align || 'left'};
`;

const HeadTitle = styled.div`
  padding: 0 0.2rem;
`;

const Star = styled(ListItemIcon)<{ isActive: boolean; theme?: Theme }>`
  ${({ isActive, theme }) => {
    return `
  svg {
    fill:  ${isActive ? theme.palette.primary.main : theme.palette.grey[200]};
  }
  `;
  }}
`;

export const Styled = {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  HeadTitle,
  Star,
};
