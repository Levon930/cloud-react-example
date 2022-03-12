import React from 'react';
import { Box, Card, Checkbox as MuiCheckbox, CheckboxProps } from '@material-ui/core';

import styled from '@emotion/styled';
import { ThemePropsType } from './ExpandedFile.types';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FlexColumnBox = styled(FlexBox)`
  flex-direction: column;
`;

const CardContainer = styled(Card)<ThemePropsType>`
  ${({ theme }) => `
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid ${theme.palette.grey[300]};
  `}
`;

const Checkbox: React.FC<CheckboxProps> = (props) => <MuiCheckbox {...props} color="primary" />;

const PredefinedIcon = styled(FlexBox)<ThemePropsType>`
  ${({ theme }) => `
    height: auto;
    padding-bottom: 12%;
    border-bottom: 1px solid ${theme.palette.grey[300]};
    cursor: pointer;
    svg {
      width: 30%;
    }
  `}
`;

const FolderIcon = styled(Box)<ThemePropsType>`
  ${({ theme }) => `
    width: 15%;
    margin-right: 3%;
    svg {
      width: 100%;
      fill: ${theme.palette.yellow[300]};
    }
  `}
`;

const TitleBox = styled(Box)`
  font-size: 1rem;
  font-weight: 300;
`;

const FolderNameBox = styled(Box)`
  font-size: 0.8rem;
`;

export const Styled = {
  CardContainer,
  FlexBox,
  FlexColumnBox,
  TitleBox,
  FolderNameBox,
  FolderIcon,
  PredefinedIcon,
  Checkbox,
};
