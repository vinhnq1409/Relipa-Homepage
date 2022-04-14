import React from 'react'
import { DialogActions, DialogContent, Dialog, DialogContentText, Button, DialogTitle } from '@material-ui/core'

export const Dialogs = ({ open, handleCancel, title, content, onClick }) => {
  return (
    <Dialog open={open} onClose={handleCancel} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText maxWidth='lg'>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick} color='primary' variant='contained'>
          Confirm
        </Button>
        <Button onClick={handleCancel} color='secondary' variant='contained'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
