export type ProfilePopoverLink = Readonly<{
  title: string;
  path: string;
  id: number;
}>;
export type AnchorProps = {
  vertical: string;
  horizontal: string;
};
export type ProfilePopoverProps = Readonly<{
  onClose: () => void;
  isOpen: boolean;
  anchorEl: any;
  handleToggle?: (isOpen: boolean) => void;
  user?: {
    plan: string;
    avatar: string;
    email: string;
    name: string;
  };
  anchorOrigin: AnchorProps;
  transformOrigin: AnchorProps;
}>;
