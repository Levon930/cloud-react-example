import React, { FC } from 'react';

import { CommentAlarm, DocumentAlarm } from '@components/SvgComponents';
import { FinalNotificationType } from './NotificationsPopover.types';

import { Styled } from './NotificationsPopover.styled';

const NotificationBody: FC<{ notification: FinalNotificationType }> = ({ notification }) => {
  return (
    <Styled.ListItemWrapper key={notification.hash}>
      <Styled.ListItemIconWrapper>
        {notification.action === 'share_invitation_sent' ? <DocumentAlarm /> : <CommentAlarm />}
      </Styled.ListItemIconWrapper>
      <Styled.ListItemInfo>
        <Styled.NotificationText variant="overline" display="block" gutterBottom>
          {notification.text}
        </Styled.NotificationText>
        <Styled.NotificationDate variant="caption" display="block" gutterBottom>
          {notification.time}
        </Styled.NotificationDate>
      </Styled.ListItemInfo>
      <Styled.Actions>{notification.actions}</Styled.Actions>
    </Styled.ListItemWrapper>
  );
};

export default NotificationBody;
