import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Typography,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import style from '../../../styles/admin/AdminAccount.module.css'

export default function AdminAddAcount() {
  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [area, setArea] = useState(0)
  const [role, setRole] = useState(0)

  const defaultValue = {
    username: '',
    email: '',
    password: '',
    re_password: ''
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
    if (showPassword === false) {
      setType('text')
    } else {
      setType('password')
    }
  }

  const schema = Yup.object().shape({
    username: Yup.string().required('Please enter usename in fill'),
    email: Yup.string().required('Please enter email in fill'),
    password: Yup.string()
      .min(8, 'Password must be at least ')
      .max(30, 'Password too long')
      .required('new password is required'),
    re_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ defaultValue, resolver: yupResolver(schema) })

  const handleChangeArea = (event) => {
    setArea(event.target.value)
  }

  const handleChangeRole = (event) => {
    setRole(event.target.value)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  const onError = (data) => {
    console.log(data)
  }
  return (
    <>
      <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <div className={style.paper}>
          <Avatar className={style.avatar} />
          <Typography component={'h1'} variant='h5' className={style.title}>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit, onError)} className={style.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Controller
                  name='username'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      name='username'
                      variant='outlined'
                      required
                      fullWidth
                      id='usename'
                      label='UserName'
                      {...field}
                    />
                  )}
                />
                {errors.username && <FormHelperText error>{errors.username.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={12}>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <TextField name='email' variant='outlined' required fullWidth id='email' label='Email' {...field} />
                  )}
                />
                {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={12}>
                <Controller
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      name='password'
                      variant='outlined'
                      required
                      fullWidth
                      id='password'
                      label='Password'
                      type={type}
                      {...field}
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        )
                      }}
                    />
                  )}
                />
                {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={12}>
                <Controller
                  name='re_password'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      name='re_password'
                      variant='outlined'
                      required
                      fullWidth
                      id='re_password'
                      label='Confirm Password'
                      type={type}
                      {...field}
                      InputProps={{
                        endAdornment: (
                          <IconButton id='re_pass' onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        )
                      }}
                    />
                  )}
                />
                {errors.re_password && <FormHelperText error>{errors.re_password.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name='area'
                  control={control}
                  render={({ field }) => (
                    <div>
                      <InputLabel id='area'>Area</InputLabel>
                      <Select labelId='area' defaultValue={area} onChange={handleChangeArea} fullWidth {...field}>
                        <MenuItem value={0}>None</MenuItem>
                        <MenuItem value={1}>Div 1</MenuItem>
                        <MenuItem value={2}>Div 2</MenuItem>
                      </Select>
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel id='role'>Role</InputLabel>
                <Select labelId='role' defaultValue={role} onChange={handleChangeRole} fullWidth>
                  <MenuItem value={0}>Member</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Partner</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={style.submit}>
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  )
}

AdminAddAcount.layout = Admin
