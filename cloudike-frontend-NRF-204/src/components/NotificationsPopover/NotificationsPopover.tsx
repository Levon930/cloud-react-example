import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import Popover from '@material-ui/core/Popover';

import NotificationBody from './NotificationBody';
import { NotificationsPopoverProps, NotificationType } from './NotificationsPopover.types';

import { Styled } from './NotificationsPopover.styled';

/**
 * move to header folder
 * rewrite component
 */
const NotificationsPopover: React.FC<NotificationsPopoverProps> = ({
  isOpen,
  handleToggle,
  anchorEl,
  notifications = [],
}) => {
  const { t } = useTranslation('notifications');

  const renderNotification = (rawNotification: NotificationType) => {
    const { action, hash } = rawNotification;
    switch (rawNotification.action) {
      case 'share_invitation_sent':
        return (
          <NotificationBody
            key={rawNotification.hash}
            notification={{
              action,
              hash,
              time: formatTime(rawNotification.timestamp),
              text: generateInvitationText(rawNotification),
              actions: generateInvitationActions(rawNotification),
            }}
          />
        );
      case 'numerous_failed_login_attempts':
        return (
          <NotificationBody
            key={rawNotification.hash}
            notification={{
              action,
              hash,
              time: formatTime(rawNotification.timestamp),
              text: generateLoginFailedText(rawNotification),
              actions: generateLoginFailedActions(rawNotification),
            }}
          />
        );
      default:
        return null;
    }
  };

  const generateLoginFailedText = (notification: NotificationType) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Trans
        defaults="numerous_failed_login_attempts.text"
        ns="notifications"
        values={{
          username: notification.initNoticeUserName,
          count: notification.text,
        }}
      />
    );
  };

  const generateInvitationText = (notification: NotificationType) => {
    const isDocNameHidden =
      notification.status === 'accepted' || notification.status === 'declined';

    return (
      <Trans
        defaults="file_shared_invitation.text"
        ns="notifications"
        values={{
          username: notification.initNoticeUserName,
          doc: notification.path,
        }}
        components={{
          link: (
            <Styled.DocumentLink
              dangerouslySetInnerHTML={{ __html: isDocNameHidden ? '' : notification.path }}
              // TODO uncomment this when sharedFiles component will be ready
              // href={isDocNameHidden ? '' : `/shares/${notification.hash}`}
            />
          ),
        }}
      />
    );
  };

  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp), 'dd.MM.yy a HH:MM');
  };

  const generateInvitationActions = (notification: NotificationType) => {
    switch (notification.status) {
      case 'accepted':
        return <Styled.StatusWrapper>{t('accepted')}</Styled.StatusWrapper>;
      case 'declined':
        return <Styled.StatusWrapper>{t('rejected')}</Styled.StatusWrapper>;
      case 'new':
        return (
          <>
            <Styled.ButtonWrapper
              accept
              variant="contained"
              onClick={() => handleSubmit('accept', notification)}
            >
              {t('accept')}
            </Styled.ButtonWrapper>
            <Styled.ButtonWrapper
              onClick={() => handleSubmit('refuse', notification)}
              variant="contained"
            >
              {t('rejected')}
            </Styled.ButtonWrapper>
          </>
        );
      default:
        return null;
    }
  };

  const generateLoginFailedActions = (notification: NotificationType) => {
    return (
      <Styled.ButtonWrapper
        onClick={() => handleSubmit('confirm', notification)}
        accept
        variant="contained"
      >
        {t('confirm')}
      </Styled.ButtonWrapper>
    );
  };

  const handleSubmit = (type: string, notification: NotificationType) => {
    // TODO finalize submit buttons click handlers
    let payload;
    switch (type) {
      case 'confirm':
        payload = {
          receiver_id: notification.userId,
          sender_id: notification.initNoticeUserId,
          hash: notification.hash,
        };

        return;
      case 'accept':
        payload = {
          receiver_id: notification.userId,
          sender_id: notification.initNoticeUserId,
          hash: notification.hash,
        };

        return;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      case 'refuse':
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        payload = {
          receiver_id: notification.userId,
          sender_id: notification.initNoticeUserId,
          hash: notification.hash,
        };

        return;
      default:
        return null;
    }
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={() => handleToggle(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Styled.ListWrapper>
        {notifications?.length ? (
          notifications.map((item) => (item ? renderNotification(item) : ''))
        ) : (
          <Styled.NotificationsEmpty>empty</Styled.NotificationsEmpty>
        )}
      </Styled.ListWrapper>
    </Popover>
  );
};

export default NotificationsPopover;
