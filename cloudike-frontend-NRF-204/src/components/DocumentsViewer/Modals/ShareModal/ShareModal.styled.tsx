import { Box, Tabs } from '@material-ui/core';

import styled from '@emotion/styled';

const ModalWrapper = styled(Box)`
  ${({ theme }) => `
  width: 37.5rem;
  min-height: 28.8rem;
  padding-top: 1.3rem;
  font-size: 0.9rem;
  color:${theme.palette.grey[100]};
  `}
`;

const TabsRow = styled(Tabs)`
  ${({ theme }) => `
  margin-bottom: 1.56rem;
  & span {
    color: ${theme.palette.grey[100]};
    font-size: 1rem;
    text-transform: none;
  }
  & .MuiTabs-flexContainer {
    justify-content: space-between;
  }
  & .MuiTabs-indicator {
    background-color:black;
  }
`}
`;

export const Styled = {
  ModalWrapper,
  TabsRow,
};
