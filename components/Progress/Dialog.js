import React from 'react'
import { DialogActions, DialogContent, Dialog, DialogContentText, Button } from '@material-ui/core'

export const Dialogs = ({ open, handleCancel, title, onClick }) => {
  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogContent>
        <DialogContentText maxWidth='sm'>{title}</DialogContentText>
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
