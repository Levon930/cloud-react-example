export type PopoverMargin = Readonly<{
  left: string;
  top: string;
  right: string;
  bottom: string;
}>;

export type PopoverProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  children?: JSX.Element;
  anchorEl: any;
  margin?: PopoverMargin;
}>;

export type ComponentTypes = Readonly<{
  margin: PopoverMargin;
}>;
