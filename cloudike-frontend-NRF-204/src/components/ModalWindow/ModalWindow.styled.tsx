import React from 'react';
import { Box, IconButton, Modal } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './ModalWindow.types';

const ModalWindow = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const CloseIcon: React.FC = (props) => (
  <IconButton {...props}>
    <Close />
  </IconButton>
);

const CloseButton = styled(
  (
    props: JSX.IntrinsicAttributes & {
      children?: React.ReactNode;
      onClick: React.MouseEventHandler<HTMLButtonElement>;
    },
  ) => <CloseIcon {...props} />,
)`
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
`;

const Paper = styled(Box)<ItemWrapperPropsType>`
  ${({ theme }) => `
    background-color: ${theme.palette.background.paper};
    box-shadow: ${theme.shadows[1]};
    padding: ${theme.spacing(2, 3)};
  `}
  outline: none;
  border-radius: 8px;
  position: relative;
  h1 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

export const Styled = {
  ModalWindow,
  ButtonsWrapper,
  CloseButton,
  Paper,
};
