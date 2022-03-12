import { AnchorProps } from '@layouts/Main/Header';

export type FooterPopoverLink = Readonly<{
  title: string;
  path: string;
  id: number;
}>;

export type FooterPopoverProps = Readonly<{
  onClose: () => void;
  isOpen: boolean;
  anchorEl: any;
  anchorOrigin: AnchorProps;
  transformOrigin: AnchorProps;
}>;
