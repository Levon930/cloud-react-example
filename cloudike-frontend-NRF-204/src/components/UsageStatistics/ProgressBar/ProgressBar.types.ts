import { ComponentType } from 'react';

export type ProgressBarProps = Readonly<{
  title: string;
  usage: string;
  total: string;
  value: number;
  ImgComponent: ComponentType;
}>;
