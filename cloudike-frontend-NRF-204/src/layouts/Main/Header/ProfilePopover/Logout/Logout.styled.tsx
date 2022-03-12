import styled from '@emotion/styled';

const LogoutButtonWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  color: ${theme.palette.grey[200]};
  cursor: pointer;
  padding: 10px 13px;
  & svg {
    width: 16px;
    height: 17px;
    fill: ${theme.palette.grey[200]};
    margin-right: 10px;
  }
  &:hover {
    color: ${theme.palette.grey[100]};
    & svg {
    fill: ${theme.palette.grey[100]};
    }
  }
  `}
`;

export const Styled = {
  LogoutButtonWrapper,
};
