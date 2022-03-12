import { Box, Button } from '@material-ui/core';

import styled from '@emotion/styled';

const Link = styled.a`
  text-decoration: none;
  img {
    width: 1.25rem;
  }
`;

const OpenModalButton = styled(Button)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    margin: 0;
    text-transform: initial;
  `}
`;

const TableContainerWrapper = styled(Box)`
  padding: 20px 5px 0;
  td {
    color: ${({ theme }) => theme.palette.grey[200]};
    svg {
      width: 1.4em;
      height: auto;
    }
  }
  nav {
    margin: 30px 0;
  }
`;

const PaginationWrapper = styled(Box)`
  button {
    border-radius: 0;
  }
`;

export const Styled = {
  Link,
  OpenModalButton,
  TableContainerWrapper,
  PaginationWrapper,
};
