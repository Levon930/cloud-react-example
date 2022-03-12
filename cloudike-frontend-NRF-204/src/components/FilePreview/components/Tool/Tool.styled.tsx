import { Box } from '@material-ui/core';

import { ToolTypes } from '@components';
import styled from '@emotion/styled';

const Tool = styled(Box)<ToolTypes>`
  margin-bottom: 0.6rem;
  padding: 1.3rem;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  background: ${({ disabled, theme }) =>
    disabled ? theme.palette.grey[300] : theme.palette.grey[900]};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  & svg {
    width: 1.1rem;
    height: 1.3rem;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.grey[900]};
  }
`;

export const Styled = {
  Tool,
};
