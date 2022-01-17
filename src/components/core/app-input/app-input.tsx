import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { InputBase, InputBaseProps } from '@material-ui/core';

export const AppInput: React.FC<InputBaseProps> = ({ classes, inputProps, ...rest }) => {
  const styles = useStyles();

  return (
    <InputBase
      inputProps={{ ...inputProps, title: '', 'aria-label': '' }}
      classes={{
        root: clsx(classes?.root, styles.root),
        input: clsx(classes?.input, styles.input),
        disabled: clsx(classes?.disabled, styles.disabled),
        focused: clsx(classes?.focused, styles.focused),
        error: clsx(classes?.error, styles.error),
        multiline: clsx(classes?.multiline, styles.multiline),
        inputAdornedEnd: clsx(classes?.inputAdornedEnd, styles.inputAdornedEnd),
        inputAdornedStart: clsx(classes?.inputAdornedStart, styles.inputAdornedStart),
        adornedStart: clsx(classes?.adornedStart, styles.adornedStart),
        adornedEnd: clsx(classes?.adornedEnd, styles.adornedStart),
        ...classes,
      }}
      {...rest}
    />
  );
};
