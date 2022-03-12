import { Theme } from '@material-ui/core';

import { Maybe } from '@api';

export type NotificationsPopoverProps = Readonly<{
  isOpen: boolean;
  handleToggle: (isOpen: boolean) => void;
  anchorEl: any;
  notifications: Maybe<NotificationType>[];
}>;

export type NotificationType = Readonly<{
  status: string;
  initNoticeUserId: number;
  userId: number;
  timestamp: number;
  modified: number;
  initNoticeUserName: string;
  behavior: string;
  text: string;
  action: string;
  scope: string;
  path: string;
  hash: string;
  permissions?: string | null;
}>;

export type FinalNotificationType = Readonly<{
  action: string;
  time: string;
  text: JSX.Element | string | null;
  actions: JSX.Element | null;
  hash: string;
}>;

export type ItemWrapperPropsType = Readonly<{
  onClick?: (notification: NotificationType) => void;
  theme?: Theme;
  accept?: boolean;
  accepted?: boolean;
}>;
