import { TooltipProps as MuiTooltipProps } from '@material-ui/core';

export type TooltipProps = MuiTooltipProps &
  Readonly<{
    title: string;
  }>;
