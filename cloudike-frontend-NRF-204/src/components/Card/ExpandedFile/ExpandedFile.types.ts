import { Theme } from '@material-ui/core';

import { Extension } from './ExpandedFile.constants';

export type ExpandedFile = Readonly<{
  extension: Extension.jpg | Extension.jpeg | Extension.png | Extension.doc;
  folderTitle: string;
  name: string;
  title: string;
  withCheckbox: boolean;
  handleChange: (n: string) => void;
  checked: boolean;
  handleOpen: () => void;
}>;

export type ExtensionIcon = Readonly<{
  extension: Extension.jpg | Extension.jpeg | Extension.png | Extension.doc;
}>;

export type ThemePropsType = Readonly<{
  theme?: Theme;
}>;
