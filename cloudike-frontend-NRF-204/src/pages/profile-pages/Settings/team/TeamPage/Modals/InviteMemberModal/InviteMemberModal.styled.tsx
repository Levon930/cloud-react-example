import { InputLabel } from '@material-ui/core';

import styled from '@emotion/styled';

const Label = styled(InputLabel)`
  font-size: 1rem;
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.palette.grey[200]};
`;

export const InviteMemberStyled = { Label };
