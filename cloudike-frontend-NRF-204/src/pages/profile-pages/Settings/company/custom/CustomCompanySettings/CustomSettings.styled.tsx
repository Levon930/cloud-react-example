import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  width: 100%;
`;

const TitleWrapper = styled(Box)`
  margin: 20px 0;
`;

const DropzonAreaWrapper = styled(Box)`
  width: 50%;
`;

const Actions = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Styled = {
  DropzonAreaWrapper,
  TitleWrapper,
  Container,
  Actions,
};
