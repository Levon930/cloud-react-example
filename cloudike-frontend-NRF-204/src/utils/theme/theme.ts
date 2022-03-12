import { createTheme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';

import { CONSTANTS } from './constants';
import { overrides } from './overrides';
import { palette } from './palette';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans KR',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette,
  overrides: overrides as Overrides,
  props: {
    MuiButtonBase: {
      disableRipple: true,
      autoCapitalize: 'none',
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      autoCapitalize: 'none',
    },
  },
  ...CONSTANTS,
});
