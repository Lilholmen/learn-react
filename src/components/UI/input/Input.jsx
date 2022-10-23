import React from 'react';
import classes from './Input.module.css';

const Input = function (props) {
  return <input className={classes.customInput} {...props} />;
};

export default Input;
