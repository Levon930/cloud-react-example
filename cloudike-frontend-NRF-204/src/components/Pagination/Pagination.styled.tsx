import { Pagination as MuiPagination, PaginationProps } from '@material-ui/lab';

import styled from '@emotion/styled';

const StyledPagination = styled(MuiPagination)`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .Mui-selected {
      background-color: inherit;
      border: 1px solid ${theme.palette.yellow[300]};
      color: ${theme.palette.yellow[300]};
    }

    .MuiPaginationItem-page {
      background-color: inherit;
    }
    
    .MuiPaginationItem-page:hover {
      background-color: ${theme.palette.primaryWithOpacity[200]};
    }
  `}
`;

const Pagination: React.FC<PaginationProps> = (props) => (
  <StyledPagination shape="rounded" {...props} />
);

export const Styled = {
  Pagination,
};
