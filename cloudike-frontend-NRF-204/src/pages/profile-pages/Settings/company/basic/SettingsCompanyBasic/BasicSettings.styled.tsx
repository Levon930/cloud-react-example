import { Link as ReactLink } from 'react-router-dom';
import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.grey[200]};
`;

const AdminSettings = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 1rem 0;
`;

const DividerWrapper = styled.div`
  margin: 1rem 0;
`;

const Container = styled(Box)`
  display: grid;
  width: 50%;
`;

const DomainText = styled.span`
  width: 30%;
  text-align: center;
  padding: 14px 0;
  background-color: ${({ theme }) => theme.palette.grey[600]};
  border-radius: 0 5px 5px 0;
  margin: 32px auto auto;
`;

const InputWrapper = styled(Box)`
  display: flex;
  align-items: center;

  input {
    border-radius: 5px 0 0 5px;
  }
`;

const ApplyWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const Styled = {
  ApplyWrapper,
  AdminSettings,
  DividerWrapper,
  InputWrapper,
  DomainText,
  Container,
  Link,
};
