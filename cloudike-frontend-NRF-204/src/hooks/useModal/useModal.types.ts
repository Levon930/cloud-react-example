import { ReactChild } from 'react';

export type RenderModalType = {
  children: ReactChild;
  title?: string;
  className?: string;
};

type UseModalResult = {
  setIsOpen: (isOpen: boolean) => void;
  RenderModal: (RenderModalType: RenderModalType) => JSX.Element;
  isOpen: boolean;
};

export type UseModal = (backPath?: string, initialValue?: boolean) => UseModalResult;
