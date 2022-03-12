import { Box, Button } from '@material-ui/core';

import styled from '@emotion/styled';
import { ComponentTypes } from './TermsModal.types';

const MainWrapper = styled(Box)`
  ${({ theme }) => `
    margin-top: 30px;
    width: 550px;
    
    & .rdw-editor-toolbar {
      padding: 0;
      display: flex;
      justify-content: space-between;
      & .rdw-inline-wrapper,
      .rdw-fontsize-wrapper,
      .rdw-link-wrapper,
      .rdw-list-wrapper,
      .rdw-history-wrapper {
        border: 1px solid ${theme.palette.grey[200]};
        margin-bottom: 0px;
      }
    }
    & .rdw-editor-main {
      border: 1px solid ${theme.palette.grey[200]};
      padding: 0 10px;
      height: 200px;
    }
  `};
`;

const ActionsWrapper = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonWrapper = styled(Button)<ComponentTypes>`
  ${({ theme, isApply = false }) => `
    background-color: ${isApply ? theme.palette.yellow[100] : 'transparent'};
    margin: 0 5px;
    border: ${isApply ? `1px solid transparent` : `1px solid ${theme.palette.grey[200]}`};
  `}
`;

export const Styled = {
  MainWrapper,
  ButtonWrapper,
  ActionsWrapper,
};
