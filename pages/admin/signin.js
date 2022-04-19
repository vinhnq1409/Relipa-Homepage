import React, { useState } from 'react'
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
import { STORAGEKEY, setCookie } from '../../utils/storage'
import { post } from '../../api/BaseRequest'
import styles from '../../styles/admin/signin.module.css'
import { useMutation } from 'react-query'
import CustomizedSnackbars from '../../components/CustomSnackbar'

export default function SignIn() {
  const router = useRouter()

  const [snackbar, setSnackbar] = useState({
    messageSnackbar: '',
    open: false,
    severity: ''
  })

  const signInApi = async(data) => {
    return await post('login', data)
  }

  const { mutate: signIn } = useMutation(signInApi, {
    onSuccess: (data) => {
      setCookie(STORAGEKEY.ACCESS_TOKEN, data?.access_token)
      router.push('/admin')
    },
    onError: () => {
      setSnackbar({
        open: true,
        severity: 'error',
        messageSnackbar: 'Email or Password incorrect'
      })
    }
  })

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    signIn(data)
  }

  return (
    <Container className={styles.wrapper} component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={styles.paper}>
        <Typography className={styles.title} component='h1' color='primary' variant='h2'>
          Relipa
        </Typography>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email'
              }
            })}
            type='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            {...register('password', { required: true })}
            label='Password'
            type='password'
            id='password'
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' color='primary' className={styles.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.messageSnackbar}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Container>
  )
}
