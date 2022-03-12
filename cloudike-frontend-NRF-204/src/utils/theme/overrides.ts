import { CONSTANTS } from './constants';
import { palette } from './palette';

export const overrides = {
  MuiButton: {
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      padding: '0.4rem 2rem',
      borderRadius: '3px',
    },
    contained: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: palette.primaryWithOpacity[200],
      },
    },
  },
  MuiIconButton: {
    colorPrimary: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  MuiCheckbox: {
    colorSecondary: {
      '&$checked': {
        color: '#FFB41D',
      },
    },
  },
  MuiRadio: {
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  MuiSelect: {
    root: {
      padding: '2px 6px',
      fontSize: CONSTANTS.fontSize.md,
      border: `1px solid ${palette.grey[400]}`,
    },
  },

  MuiFormControl: {
    root: {
      marginBottom: '1rem',
    },
  },

  /* input */
  MuiInputBase: {
    root: {
      '&.Mui-error input': {
        borderColor: palette.yellow[200],
      },
    },
    input: {
      width: 'auto',
      fontSize: '1rem',
      borderRadius: 4,
      flex: 1,
      position: 'relative',
      padding: 15,
      backgroundColor: palette.primary.white,
      color: palette.grey[900],
      '&:focus': {
        borderColor: palette.yellow[200],
      },
      '&.Mui-disabled': {
        color: palette.grey[200],
        background: palette.grey[600],
      },
    },
  },

  /* input label */
  MuiInputLabel: {
    root: {
      color: palette.grey[100],
      fontSize: '1em',
      marginBottom: '1rem',
      '&.Mui-error': {
        color: palette.grey[100],
      },
      '&.Mui-focused': {
        color: palette.grey[100],
      },
    },
    formControl: {
      position: 'relative',
    },
    shrink: {
      transform: 'none',
    },
  },

  /* input validation error */
  MuiFormHelperText: {
    root: {
      paddingLeft: 10,
      marginTop: 0,
      '&.Mui-error': {
        color: palette.yellow[200],
      },
    },
  },
  MuiTableRow: {
    hover: {
      '&.MuiTableRow-hover:hover': {
        backgroundColor: palette.primaryWithOpacity[400],
      },
    },
    root: {
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: palette.primaryWithOpacity[200],
      },
    },
  },
  MuiPaginationItem: {
    page: {
      '&$selected': {
        backgroundColor: palette.primary.white,
        color: palette.yellow[300],
        border: `1px solid ${palette.yellow[300]}`,
        borderRadius: 0,
        '&:hover': {
          backgroundColor: palette.primaryWithOpacity[200],
        },
      },
    },
  },
  MuiPagination: {
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
  },

  MuiTooltip: {
    tooltip: {
      backgroundColor: palette.primary.white,
      color: palette.grey[200],
      boxShadow: '3px 3px 4px -1px rgb(0 0 0 / 10%)',
      fontSize: '0.8rem',
      border: `1px solid ${palette.grey[300]}`,
      padding: '8px',
    },
    arrow: {
      '&::before': {
        border: `1px solid ${palette.grey[300]}`,
      },
    },
  },
};
