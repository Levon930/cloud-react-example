export type PopoverLink = Readonly<{
  title: string;
  path: string;
  id: number;
}>;

export type PopoverLinksProps = Readonly<{
  links: PopoverLink[];
  isOpen: boolean;
  onClose: () => void;
}>;
