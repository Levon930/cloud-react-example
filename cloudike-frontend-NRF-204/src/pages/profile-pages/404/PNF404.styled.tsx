import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const FlexBox = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

const FlexColumnBox = styled(FlexBox)`
  flex-direction: column;
`;

const PageContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

const Container = styled(FlexColumnBox)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(Box)`
  font-size: 1.2rem;
  margin-bottom: 7%;
`;

const TextPrimary = styled(Box)`
  font-size: 1rem;
  margin-bottom: 2%;
`;

const Text = styled(Box)`
  font-size: 1rem;
  margin-bottom: 10%;
  color: grey;
`;

const FooterText = styled(Box)`
  font-size: 0.8rem;
  margin-top: 10%;
  color: grey;
`;

const Icon404Container = styled(Box)`
  width: 40%;
  margin: 4%;
  svg {
    width: 100%;
  }
`;

export const Styled = {
  PageContainer,
  Container,
  FlexBox,
  FlexColumnBox,
  Icon404Container,
  Title,
  TextPrimary,
  Text,
  FooterText,
};
