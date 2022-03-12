import MuiTooltip, { TooltipProps } from '@material-ui/core/Tooltip';

import styled from '@emotion/styled';

const Tooltip = styled((props: TooltipProps) => (
  <MuiTooltip classes={{ popper: props.className }} {...props} />
))``;

export const Styled = {
  Tooltip,
};
