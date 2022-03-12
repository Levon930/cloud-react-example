import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

export const assets = {
  mainBackground: '/assets/bg.svg',
  authBanner: '/assets/authBanner.png',
};

const LayoutContainer = styled(Box)`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 180px);
`;

const BannerContainer = styled(Box)`
  width: 48%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & img {
    width: 487px;
    height: 393px;
    @media (max-width: 1024px) {
      width: 360px;
      height: auto;
    }
  }
`;

const FormSideContainer = styled(Box)`
  width: 52%;
  padding-left: 8%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  & > div:first-of-type {
    flex: 1;
    overflow-y: auto;
  }
`;

const AuthLayout = styled(Box)`
  background-size: cover;
  background-position: center;
  background-image: url(${assets.mainBackground});
`;

const AuthHeader = styled(Box)`
  height: 74px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4%;
`;

const Footer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftSideFooter = styled(Box)``;

const RightSideFooter = styled(Box)`
  ${({ theme }: any) => `
    width: 50%;
    font-size: 0.8rem;
    color: ${theme.palette.grey[200]};
    padding: 40px 0;
        `}
`;

export const AuthLayoutStyled = {
  LayoutContainer,
  BannerContainer,
  FormSideContainer,
  AuthLayout,
  AuthHeader,
  RightSideFooter,
  LeftSideFooter,
  Footer,
};
