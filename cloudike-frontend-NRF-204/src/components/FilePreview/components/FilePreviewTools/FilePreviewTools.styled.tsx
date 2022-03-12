import { Box, Grid, TooltipProps } from '@material-ui/core';
import MuiTooltip from '@material-ui/core/Tooltip';

import styled from '@emotion/styled';

const ToolsBox = styled(Grid)`
  width: 3.8rem;
  position: absolute;
  right: 0;
`;

const ToolsButton = styled(Box)`
  ${({ theme }) => `
  & button {
  background-color: ${theme.palette.grey[900]};
  width: 100%;
  height: 3.1rem;
  top: 3.1rem;
  border-radius: 0;
  &:hover {
     background-color: ${theme.palette.common.white};
    }
  }
  & svg {
    fill: ${theme.palette.grey[700]};
    font-size: 0.8rem;
  }
`}
`;

const ToolsContainer = styled(Grid)`
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  & button {
    padding: 0;
  }
`;

const Tooltip = styled((props: TooltipProps) => (
  <MuiTooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    color: ${({ theme }) => theme.palette.common.white};
    box-shadow: 9px 9px 5px -10px rgba(0, 0, 0, 0.55);
    font-size: 0.7rem;
    .MuiTooltip-arrow::before {
      background-color: ${({ theme }) => theme.palette.grey[900]};
    }
  }
`;

export const Styled = {
  ToolsBox,
  ToolsButton,
  ToolsContainer,
  Tooltip,
};
