import { Box, TooltipProps } from '@material-ui/core';

import { Tooltip as OurTooltip } from '@components';
import styled from '@emotion/styled';

const ModalItemLabel = styled(Box)`
  display: flex;
  align-items: center;
  width: 30rem;
`;

const ModalItem = styled(Box)`
  display: flex;
  width: 100%;
  margin: 0 0 0.5rem 0;
`;

const Tooltip: React.FC<TooltipProps> = (props) => <OurTooltip {...props} placement="right" />;

export const AuthorityStyled = { ModalItemLabel, ModalItem, Tooltip };
