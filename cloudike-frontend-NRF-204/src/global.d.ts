import { RefObject } from 'react';
import { Theme as MuiTheme } from '@material-ui/core/styles';
import { ColorPartial } from '@material-ui/core/styles/createPalette';

import 'react-i18next';
import '@emotion/react';

// TODO add values of spacing
interface CustomThemeProps {
  fontSize: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>;
}
declare module '@material-ui/core/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomThemeProps {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomThemeProps {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    yellow: ColorPartial;
    primaryWithOpacity: ColorPartial;
    grey: ColorPartial;
    red: ColorPartial;
  }
  interface Palette {
    yellow: ColorPartial;
    primaryWithOpacity: ColorPartial;
    grey: ColorPartial;
    red: ColorPartial;
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme, CustomThemeProps {
    palette: {
      primary: PaletteType;
      common: {
        white: PaletteType;
      };
      grey: ColorPartial;
      yellow: ColorPartial;
      primaryWithOpacity: ColorPartial;
      red: ColorPartial;
    };
  }
}

declare module '@material-ui/core/Box' {
  interface BoxProps {
    ref?: RefObject<HTMLButtonElement>;
  }
}
