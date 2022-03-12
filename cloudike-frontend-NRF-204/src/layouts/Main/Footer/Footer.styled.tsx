import { Box } from '@material-ui/core';

import styled from '@emotion/styled';
import { FooterInfoButton, FooterMoreButton } from '@layouts/Main/Footer';
import { ContainerPropsType } from './Footer.types';

const Container = styled(Box)<ContainerPropsType>`
  display: flex;
  flex-direction: ${(props) => (props.open ? 'row' : 'column')};
  padding: 10px;
  margin-top: auto;
`;

const FooterInfo = styled(FooterInfoButton)`
  display: flex;
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
`;

const FooterMore = styled(FooterMoreButton)`
  display: flex;
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Container,
  FooterInfo,
  FooterMore,
};
