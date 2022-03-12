import { Box } from '@material-ui/core';

import { PlanIconProps } from '@components/PlanIconWrapper';
import styled from '@emotion/styled';

const IconWrapper = styled(Box)<PlanIconProps>`
  ${({ theme, fill }) => `
   width: 3.75rem;
   height: 3.75rem;
   background-color: ${theme.palette.grey[600]};
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:50%;
   & svg {
   width: 33px;
   height: 22px;
   fill: ${fill}
   }
 `}
`;

export const Styled = {
  IconWrapper,
};
