import { AnchorProps } from '@layouts/Main/Header';

export type InfoPopoverLink = Readonly<{
  title: string;
  path: string;
  id: number;
}>;

export type InfoPopoverProps = Readonly<{
  onClose: () => void;
  isOpen: boolean;
  anchorEl: any;
  anchorOrigin: AnchorProps;
  transformOrigin: AnchorProps;
}>;
