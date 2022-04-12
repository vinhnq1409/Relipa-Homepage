import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

export default function Notification({ open, handleClose }) {
  return <>
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open.notification} autoHideDuration={2000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity={open.severity}
      >
        {open.title}
      </MuiAlert>
    </Snackbar>
  </>
}
