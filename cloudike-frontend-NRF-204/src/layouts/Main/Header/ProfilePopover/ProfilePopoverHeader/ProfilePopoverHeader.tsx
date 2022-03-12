import React, { FC } from 'react';

import { PopoverHeaderProps } from './ProfilePopoverHeader.types';

import { Styled } from './ProfilePopoverHeader.styled';

const ProfilePopoverHeader: FC<PopoverHeaderProps> = ({ user }) => {
  return (
    <Styled.Header>
      <Styled.UserImg src={user.avatar} />
      <Styled.UserInfo>
        <Styled.UserName>{user.name}</Styled.UserName>
        <Styled.UserEmail>{user.email}</Styled.UserEmail>
      </Styled.UserInfo>
      <Styled.UserPlan>{user.plan}</Styled.UserPlan>
    </Styled.Header>
  );
};

export default ProfilePopoverHeader;
