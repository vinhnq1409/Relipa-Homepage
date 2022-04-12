import React from 'react'
import Admin from 'layouts/Admin.js'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Container,
  Typography
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import style from '../../../style/admin/AdminAccount.module.css'
export default function AdminAddAcount() {
  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={style.paper}>
          <Avatar className={style.avatar} />
          <Typography component={'h1'} variant ='h5' className={style.title}>
            Sign up
          </Typography>

          <form className={style.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs = {12} sm = {12}>
                <TextField
                  name='firstname'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label = 'First Name'
                  autoFocus
                />
              </Grid>

              <Grid item xs = {12} sm = {12}>
                <TextField
                  name='lastname'
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label = 'Last Name'
                  autoFocus
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>

      <Typography variant='body2' color='textSecondary' align='center'>
        Copyright © {new Date().getFullYear()} {''}{' '}
        <Link color='inherit' href='https://relipasoft.com/'>
          RELIPA CO., LTD.
        </Link>{' '}
        All Rights Reserved.
      </Typography>
    </>
  )
}

AdminAddAcount.layout = Admin
