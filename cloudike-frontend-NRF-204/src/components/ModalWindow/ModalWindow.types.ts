import { ReactChild } from 'react';
import { Theme } from '@material-ui/core';

export type ModalWindowProps = Readonly<{
  title?: string;
  children: ReactChild;
  isOpen: boolean;
  closeModal: () => void;
}>;

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
  accept?: boolean;
  accepted?: boolean;
}>;
