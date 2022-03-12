import { Box as MuiBox } from '@material-ui/core';

import styled from '@emotion/styled';
import { AuthLayout as OurAuthLayout } from '@layouts';

const Box = styled(MuiBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 172px);
`;

const Img = styled(MuiBox)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey[500]};
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 0 60px;
  text-align: center;
`;

const Info = styled(MuiBox)`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  > p {
    font-size: 18px;
  }
`;

const AuthLayout = styled(OurAuthLayout)`
  background-image: none;
`;

export const Styled = {
  Box,
  AuthLayout,
  Img,
  Info,
};
