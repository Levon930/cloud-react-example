import { Box, InputLabel, TooltipProps } from '@material-ui/core';

import { Tooltip as OurTooltip } from '@components';
import styled from '@emotion/styled';

const Label = styled(InputLabel)`
  font-size: 1rem;
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.palette.grey[200]};
`;

const LabelContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  > label {
    margin: 0;
  }
`;

const Tooltip: React.FC<TooltipProps> = (props) => <OurTooltip {...props} placement="right" />;

export const SetExpiratrionDateStyled = {
  Tooltip,
  Label,
  LabelContainer,
};
