import { ListItemIcon } from '@material-ui/core';

import styled from '@emotion/styled';

const FavoriteIconBox = styled(ListItemIcon)`
  ${({ theme }) => {
    return `
        cursor: pointer;
        svg {
          fill:  ${theme.palette.primary.main};
        }
  `;
  }}
`;

const WrapperBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const Styled = {
  FavoriteIconBox,
  WrapperBox,
};
