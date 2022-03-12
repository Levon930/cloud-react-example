import { Paper, Popover } from '@material-ui/core';

import styled from '@emotion/styled';
import { ComponentTypes } from './Popover.types';

const PopperWrapper = styled(Popover)<ComponentTypes>`
  ${({ margin }) => `
    margin-left: ${margin.left};
    margin-top: ${margin.top};
    margin-right: ${margin.right};
    margin-bottom: ${margin.bottom};
  `}
`;

const PaperWrapper = styled(Paper)`
  ${({ theme }) => `
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.07);
    border-radius: 2px;
    border: 1px solid ${theme.palette.grey[300]};
  `}
`;

const MenuFooter = styled.div`
  ${({ theme }) => `
    display: flex;
    padding: 11px 13px;
    width: 100%;
    & svg {
      width: 21px;
      height: 21px;
      fill: ${theme.palette.grey[200]};
      margin-right: 10px;
    }
  `}
`;

export const Styled = {
  PopperWrapper,
  PaperWrapper,
  MenuFooter,
};
