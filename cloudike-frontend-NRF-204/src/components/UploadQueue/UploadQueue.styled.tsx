import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  position: absolute;
  right: 230px;
  bottom: 10px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Box)`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.yellow[100]};
    display: flex;
    justify-content: space-between;
    padding: 5px;
    padding-left: 15px;
  `}
`;

const FilesContainer = styled(Box)<{ open: boolean }>`
  ${({ theme, open }) => `
    transition: height 4s;
    width: 100%;
    display: ${open ? 'flex' : 'none'};
    transition: all 9s ease;
    flex-direction: column;
    border: 1px solid ${theme.palette.grey[300]};
    border-top: none;
  `}
`;

const FileRow = styled(Box)`
  width: 100%;
  padding: 5px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PredefinedIcon = styled(FlexBox)`
  width: 30px;
  height: auto;
  margin-right: 15px;
  svg {
    width: 100%;
  }
`;

const FileName = styled(FlexBox)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]}
  `}
`;

const IconContainer = styled(Box)`
  width: 20px;
`;

const HeaderTitle = styled(Box)``;

const ButtonsContainer = styled(Box)``;

export const Styled = {
  Container,
  Header,
  FilesContainer,
  FileRow,
  HeaderTitle,
  ButtonsContainer,
  PredefinedIcon,
  FlexBox,
  FileName,
  IconContainer,
};
