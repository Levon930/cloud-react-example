import { Box, Grid, Typography } from '@material-ui/core';

import styled from '@emotion/styled';
import { ComponentProps } from './FilePreview.types';

const Wrapper = styled(Grid)`
  ${({ theme }) => `
  color:  ${theme.palette.grey[900]};
  width: 100%;
  height: 100%;
`}
`;

const Main = styled(Grid)<ComponentProps>`
  width: ${(props) => `calc(100vw - ${props.open ? '360px' : '60px'})`};
  transition: ease 0.2s;
`;

const HeaderTitle = styled(Grid)`
  ${({ theme }) => `
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding-left: 1.2rem;
  & a {
    text-decoration: none;
    color:  ${theme.palette.grey[900]};
  }
`}
`;

const Header = styled(Grid)`
  ${({ theme }) => `
  height: 3.1rem;
  justify-content: space-between;
  align-items: center;
  & svg {
    font-size: 1.1rem;
    fill: ${theme.palette.grey[900]};
  }
`}
`;

const MainContent = styled(Box)`
  ${({ theme }) => `
  background-color:  ${theme.palette.grey[800]};
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    background-color:  ${theme.palette.yellow[100]};
    height: 2.8rem;
    margin-top: 1.9rem;
    border-radius: 0;
  }
`}
`;

const InfoBox = styled(Grid)<ComponentProps>`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  min-width: 18.8rem;
  position: absolute;
  right:3.8rem;
  top: 3.1rem;
  height: inherit;
  background:  ${({ theme }) => theme.palette.common.white};
  font-size: 0.9rem;
  padding: 2.6rem 0 0 2.1rem;
  transition: all ease 0.5s;
}
`;

const InfoTitle = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 4.6rem;
`;

export const Styled = {
  Main,
  InfoBox,
  Wrapper,
  Header,
  MainContent,
  HeaderTitle,
  InfoTitle,
};
