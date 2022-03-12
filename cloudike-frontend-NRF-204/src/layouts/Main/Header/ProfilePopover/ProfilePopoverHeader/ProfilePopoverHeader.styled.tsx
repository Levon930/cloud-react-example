import { Avatar } from '@material-ui/core';

import styled from '@emotion/styled';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 204px;
  padding: 14px 18px;
  flex-wrap: wrap;
`;

const UserImg = styled(Avatar)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  padding: 5px 11px;
`;

const UserName = styled.div`
  ${({ theme }) => `
  color: ${theme.palette.grey[100]};
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.3px;
  `}
`;

const UserEmail = styled.div`
  ${({ theme }) => `
  color: ${theme.palette.grey[200]};
  font-size: 10px;
  font-weight: 500;
  `}
`;

const UserPlan = styled.div`
  ${({ theme }) => `
  font-size: 12px;
  font-weight: 400;
  color: ${theme.palette.grey[200]};
  `}
`;

export const Styled = {
  Header,
  UserImg,
  UserInfo,
  UserName,
  UserEmail,
  UserPlan,
};
