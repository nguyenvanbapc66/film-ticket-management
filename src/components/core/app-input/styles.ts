import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: '42px', // paddingTop: 12 + line-height: 18 + paddingBottom: 12
      backgroundColor: theme.custom.content[4],
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.custom.border[1]}`,
      'label + &': {
        marginTop: theme.spacing(1.5),
        color: theme.palette.common.white,
      },
      '&:not(.Mui-focused):not(.Mui-error):hover': {
        borderColor: theme.custom.content[1],
      },
      outline: 'none',
    },
    input: {
      fontSize: 14,
      lineHeight: '18px',
      // currently, i just delay background-color changed when
      // autocomplete on chrome. it should be better.
      // god bless you
      '&:-webkit-autofill': {
        transitionDelay: '9999999s',
        transitionProperty: 'background-color, color',
      },
      padding: theme.spacing(1.5, 2),
      '&::placeholder': {
        color: theme.custom.content[3],
        opacity: 1,
        fontWeight: 500,
      },
      '&[type=number]': {
        MozAppearance: 'textfield',
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
    multiline: {
      padding: 0,
    },
    disabled: { color: `rgba(255, 255, 255, 0.8)` },
    // affect input if has start adorn
    inputAdornedStart: {
      paddingLeft: 0,
    },
    // affect input if has end adorn
    inputAdornedEnd: {
      paddingRight: 0,
    },
    adornedStart: {
      paddingLeft: 0,
    },
    // affect input if has end adorn
    adornedEnd: {
      paddingRight: 0,
    },
    focused: { borderColor: theme.palette.primary.main },
    error: { borderColor: theme.custom.status.red },
  }),
  { index: 1 },
);

export default useStyles;
