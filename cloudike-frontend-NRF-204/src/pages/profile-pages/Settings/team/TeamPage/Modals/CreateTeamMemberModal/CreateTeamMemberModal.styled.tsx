import { Box, Container as MuiContainer, TooltipProps } from '@material-ui/core';

import { Tooltip as OurTooltip } from '@components';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled(MuiContainer)`
  display: flex;
  flex-wrap: wrap;
`;

const Tooltip: React.FC<TooltipProps> = (props) => <OurTooltip {...props} placement="right" />;

export const CreateTeamStyled = {
  Tooltip,
  Container,
  CheckboxContainer,
};
