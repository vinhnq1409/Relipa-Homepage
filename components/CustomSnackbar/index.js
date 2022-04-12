import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import styles from './Snackbar.module.css'

function Alert(props) {
  return <MuiAlert className={styles.w50} elevation={6} variant='filled' {...props} />
}

export default function CustomizedSnackbars({ message, open, onClose, severity }) {
  return (
    <div className={styles.fw}>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={onClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
