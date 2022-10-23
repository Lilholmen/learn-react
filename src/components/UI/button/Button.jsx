import React from 'react';
import classes from './Button.module.css';

const Button = function ({ children, ...props }) {
  return (
    <button {...props} className={classes.customButton}>
      {children}
    </button>
  );
};

export default Button;
