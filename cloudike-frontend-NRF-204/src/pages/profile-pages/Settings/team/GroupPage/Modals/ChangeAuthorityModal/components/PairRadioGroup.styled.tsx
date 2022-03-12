import { Box, Container } from '@material-ui/core';

import styled from '@emotion/styled';

const RadioTopLabel = styled(Container)`
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.grey[300]};
  padding: 1rem 1rem;
`;

const RadioTopLabelItems = styled(Box)`
  text-align: center;
  width: 7rem;
`;

const RadioBody = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0 1.5rem 0 0;
`;

const RadioBodyItems = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioLabel = styled(Box)`
  width: 30rem;
`;

const RadioGroupWrapper = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    display: flex;
    width: 10rem;
  }
  > div > div {
    display: flex;
    justify-content: space-between;
  }
  > div > div > label {
    margin: 0;
  }
`;

export const Styled = {
  RadioTopLabel,
  RadioTopLabelItems,
  RadioBody,
  RadioBodyItems,
  RadioLabel,
  RadioGroupWrapper,
};
