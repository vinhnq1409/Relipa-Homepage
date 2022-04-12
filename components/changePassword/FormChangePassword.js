import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import styles from '../../styles/admin/signin.module.css'
import getConfig from 'next/config'
import { changePasswordApi } from '../../api/reactQueryApi'
import CustomizedSnackbars from '../CustomSnackbar/index'

export default function FormChangePassword() {
  const { mutate: changePassword, isSuccess } = changePasswordApi()
  const [openSnackbar, setOpenSnackbar] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  const onSubmit = (data) => {
    console.log(data)
    const { old_password, new_password, password_confirm } = data
    new_password !== password_confirm ? (
      <CustomizedSnackbars
        open={openSnackbar}
        message='Confirm password failed '
        severity='error'
        onClose={handleClose}
      />
    ) : (
      changePassword({ old_password, new_password })
    )
  }

  return (
    <Container className={styles.wrapper_changepass} component='main' maxWidth='xs'>
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
    </Container>
  )
}
