import { Box, Button, Grid, Typography } from '@material-ui/core';

import styled from '@emotion/styled';

const FileContent = styled(Box)`
  text-align: center;
  font-size: 0.8rem;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

const FileTitle = styled(Typography)`
  font-size: 0.9rem;
  margin-bottom: 1.1rem;
`;

const FileImage = styled(Box)`
  height: 9.6rem;
  width: 12.5rem;
  & img {
    width: 100%;
    margin-bottom: 0.6rem;
  }
`;

const ButtonsWrapper = styled(Grid)`
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const DownloadButton = styled(Button)`
  width: 67%;
`;

const ShareButton = styled(Button)`
  width: 30%;
`;

export const Styled = {
  FileContent,
  FileTitle,
  FileImage,
  ButtonsWrapper,
  DownloadButton,
  ShareButton,
};
