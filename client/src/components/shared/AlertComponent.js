import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Fade } from '@material-ui/core';

export default function AlertComponent(props) {
  return(
    <Fade in={props.active}>
      <Alert severity={props.severity} onClose={props.handleClose}>
        {props.message}
      </Alert>
    </Fade>
  )
}
