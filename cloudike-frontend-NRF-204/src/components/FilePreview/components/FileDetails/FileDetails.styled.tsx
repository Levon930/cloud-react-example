import { Typography } from '@material-ui/core';

import styled from '@emotion/styled';

const InfoTitle = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
`;

const InfoRow = styled(Typography)`
  ${({ theme }) => `
  color:  ${theme.palette.grey[200]};
  font-size: 0.8rem;
  margin-bottom: 2.4rem;
`}
`;

export const Styled = {
  InfoTitle,
  InfoRow,
};
