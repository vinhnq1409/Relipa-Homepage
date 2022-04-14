import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import styles from '../../styles/admin/signin.module.css'
import { changePasswordApi, logoutApi } from '../../api/reactQueryApi'
import CustomizedSnackbars from '../CustomSnackbar/index'
import { removeCookie, STORAGEKEY } from '../../utils/storage'
import ClearIcon from '@material-ui/icons/Clear'

export default function FormChangePassword({ handleCancel }) {
  const router = useRouter()
  const { mutate: changePassword, isSuccess, data } = changePasswordApi()
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: '',
    severity: ''
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  const onSubmit = (data) => {
    const { old_password, new_password, password_confirm } = data
    new_password !== password_confirm
      ? setOpenSnackbar({
          open: true,
          message: 'Confirm password failed',
          severity: 'error'
        })
      : changePassword({ old_password, new_password })
  }

  useEffect(() => {
    if (isSuccess) {
      if (data?.code === 403) {
        setOpenSnackbar({
          open: true,
          message: 'Change password error',
          severity: 'error'
        })
      } else {
        setOpenSnackbar({
          open: true,
          message: 'Change password successfully',
          severity: 'success'
        })
        setTimeout(() => {
          logoutApi().then(() => {
            removeCookie(STORAGEKEY.ACCESS_TOKEN)
            router.push('/admin')
          })
        }, 2000)
      }
    }
  }, [isSuccess])

  return (
    <Container className={styles.wrapper_changepass} component='main' maxWidth='xs'>
      <ClearIcon className={styles.btn_cancel} onClick={(e) => handleCancel()} />
      <CssBaseline />
      <div className={styles.paper}>
        <Typography className={styles.title_change} component='h4' color='primary' variant='h4'>
          Change password
        </Typography>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='old_password'
            {...register('old_password', { required: true })}
            label='Old Password'
            type='password'
            id='old_password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            {...register('new_password', { required: true })}
            label='New Password'
            name='new_password'
            type='password'
            id='new_password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            {...register('password_confirm', { required: true })}
            label='Confirm Password'
            name='password_confirm'
            type='password'
            id='password_confirm'
          />
          <Button type='submit' fullWidth variant='contained' color='primary' className={styles.btn_change}>
            Change
          </Button>
        </form>
      </div>
      <CustomizedSnackbars
        open={openSnackbar?.open}
        message={openSnackbar?.message}
        severity={openSnackbar?.severity}
        onClose={handleClose}
      />
    </Container>
  )
}
