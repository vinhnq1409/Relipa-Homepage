import React from 'react'
import {
  CircularProgress,
  DialogContent,
  Dialog
} from '@material-ui/core'
import style from '../../styles/admin/AdminAccount.module.css'

export const Loading = ({ open }) => {
  <Dialog open={open} fullScreen className={style.dialogLoading}>
    <DialogContent className={style.contentBgLoading}>
      <CircularProgress size={80} />
    </DialogContent>
  </Dialog>
}
