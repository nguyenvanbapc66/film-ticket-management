import { createTheme } from '@material-ui/core/styles';

interface ThemeDesignColors {
  status: {
    green: React.CSSProperties['color'];
    red: React.CSSProperties['color'];
  };
  border: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
  };
  bg: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
    '3': React.CSSProperties['color'];
    '4': React.CSSProperties['color'];
  };
  content: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
    '3': React.CSSProperties['color'];
    '4': React.CSSProperties['color'];
    '5': React.CSSProperties['color'];
  };
  icon: {
    '1': React.CSSProperties['color'];
    '2': React.CSSProperties['color'];
  };
  hover: {
    yellow: React.CSSProperties['color'];
    white: React.CSSProperties['color'];
  };
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    custom: ThemeDesignColors;
  }
  interface ThemeOptions {
    custom: ThemeDesignColors;
  }
}

const hover = {
  yellow: '#191502',
  white: '#191919',
};

const custom: ThemeDesignColors = {
  status: {
    red: '#CE1717',
    green: '#10A342',
  },
  border: {
    '1': '#383C43',
    '2': '#808287',
  },
  bg: {
    '1': '#151515',
    '2': '#202020',
    '3': '#383C43',
    '4': '#282828',
  },
  content: {
    '1': '#ffffff',
    '2': '#999999',
    '3': '#4F4F4F',
    '4': '#151515',
    '5': '#10FF9B',
  },
  icon: {
    '1': '#888888',
    '2': '#ffffff',
  },
  hover,
};

const common = {
  black: '#141414',
};

const primary = {
  main: '#FFD610',
  dark: '#DCB910',
};

const theme = createTheme({
  custom,
  palette: {
    type: 'dark',
    background: {
      default: common.black,
      paper: custom.bg[2],
    },
    primary,
    error: { main: '#DA4545' },
    common,
    divider: custom.border[1],
  },
  props: {
    MuiDialog: {
      maxWidth: 'sm',
      fullWidth: true,
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      size: 'small',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 24,
        textTransform: 'none',
      },
      label: {
        fontWeight: 700,
      },
      contained: {
        '&.Mui-disabled': {
          backgroundColor: '#FFD610',
          color: common.black,
          opacity: 0.3,
        },
        '&:hover.Mui-disabled': {
          backgroundColor: '#DCB910 !important',
        },
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: primary.dark,
        },
        color: custom.content[4],
      },
      outlinedPrimary: {
        '&:hover': {
          backgroundColor: hover.yellow,
        },
      },
      text: {
        '&:hover': {
          backgroundColor: hover.white,
        },
      },
      sizeLarge: {
        fontSize: '14px',
        padding: `12px 16px`,
        lineHeight: '18px',
      },
      sizeSmall: {
        fontSize: '14px',
        padding: `8px 16px`,
        lineHeight: '18px',
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginLeft: '12px',
        marginRight: '12px',
      },
      positionEnd: {
        marginLeft: '12px',
        marginRight: '12px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '*, *::before, *::after': {
          padding: 0,
          margin: 0,
          boxSizing: 'content-box',
        },
      },
    },
  },
});

export default theme;
