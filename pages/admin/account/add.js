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
  MenuItem
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import style from '../../../style/admin/AdminAccount.module.css'
export default function AdminAddAcount() {
  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [area, setArea] = useState(0)
  const [role, setRole] = useState(0)
  const { handleSubmit, control } = useForm()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
    if (showPassword === false) {
      setType('text')
    } else {
      setType('password')
    }
  }

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
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={style.paper}>
          <Avatar className={style.avatar} />
          <Typography component={'h1'} variant ='h5' className={style.title}>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit, onError)} className={style.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs = {12} sm = {12}>
                <Controller
                  name='username'
                  control={control}
                  render = {({ field }) => (
                    <TextField
                      name='username'
                      variant='outlined'
                      required
                      fullWidth
                      id='usename'
                      label = 'UserName'
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs = {12} sm = {12}>
                <Controller
                  name='email'
                  control={control}
                  render = {({ field }) => (
                    <TextField
                      name='email'
                      variant='outlined'
                      required
                      fullWidth
                      id='email'
                      label = 'Email'
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs = {12} sm = {12}>
                <Controller
                  name='password'
                  control={control}
                  render = {({ field }) => (
                    <TextField
                      name='password'
                      variant='outlined'
                      required
                      fullWidth
                      id='password'
                      label = 'Password'
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
              </Grid>

              <Grid item xs = {12} sm = {12}>
                <TextField
                  name='re_password'
                  variant='outlined'
                  required
                  fullWidth
                  id='re_password'
                  label = 'Confirm Password'
                  type={type}
                  InputProps={{
                    endAdornment: (
                      <IconButton id='re_pass' onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    )
                  }}
                />
              </Grid>

              <Grid item xs = {12} sm = {6}>
                <InputLabel id='area'>Area</InputLabel>
                <Select
                  labelId='area'
                  defaultValue={area}
                  onChange = {handleChangeArea}
                  fullWidth
                >
                  <MenuItem value = {0}>None</MenuItem>
                  <MenuItem value = {1}>Div 1</MenuItem>
                  <MenuItem value = {2}>Div 2</MenuItem>
                </Select>
              </Grid>

              <Grid item xs = {12} sm = {6}>
                <InputLabel id='role'>Role</InputLabel>
                <Select
                  labelId='role'
                  value={role}
                  onChange = {handleChangeRole}
                  fullWidth
                >
                  <MenuItem value = {0}>Member</MenuItem>
                  <MenuItem value = {1}>Admin</MenuItem>
                  <MenuItem value = {2}>Partner</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={style.submit}>Submit</Button>
          </form>
        </div>
      </Container>
    </>
  )
}

AdminAddAcount.layout = Admin
