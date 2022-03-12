import { Theme } from '@material-ui/core';

type AnchorPosition = { left: number; top: number };

export type DocumentsViewerPopoverProps = Readonly<{
  isOpen: boolean;
  handleToggle: (isOpen: boolean) => void;
  anchorEl?: HTMLButtonElement | null;
  anchorPosition?: AnchorPosition;
  isActive?: boolean;
}>;

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;

export enum DocumentType {
  DocumentFolder = 'DocumentFolder',
  DocumentFile = 'DocumentFile',
}
