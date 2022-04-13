import React from 'react'
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
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import useTrans from '../../i18n/useTrans'
import style from '../../styles/admin/AdminAccount.module.css'
const Admin_Sign_Up = ({handleSubmit}) => {
  const trans = useTrans()
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={style.paper}>
        <Avatar className={style.avatar} />
        <Typography component={'h1'} variant='h5' className={style.title}>
          {trans.admin_account.sign_up}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit, onError)} className={style.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <TextField
                    name='name'
                    variant='outlined'
                    required
                    fullWidth
                    id='name'
                    label={trans.admin_account.name}
                    InputLabelProps={{
                      shrink: true
                    }}
                    {...field}
                  />
                )}
              />
              {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}
            </Grid>

            <Grid item xs={12} sm={12}>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <TextField
                    name='email'
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label={trans.admin_account.email}
                    InputLabelProps={{
                      shrink: true
                    }}
                    {...field}
                  />
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
                    label={trans.admin_account.password}
                    InputLabelProps={{
                      shrink: true
                    }}
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
                    label={trans.admin_account.re_password}
                    InputLabelProps={{
                      shrink: true
                    }}
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

            <Grid item xs={12} sm={12}>
              <Controller
                name='roles'
                control={control}
                defaultValue={role}
                render={({ field }) => (
                  <div>
                    <InputLabel id='roles'>{trans.admin_account.role}</InputLabel>
                    <Select labelId='roles' multiple defaultValue={0} onChange={handleChangeRole} fullWidth {...field}>
                      {listRole.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </Grid>
          </Grid>

          <Grid container align='center' xs={12}>
            <Grid xs={6}>
              <Button type='submit' variant='contained' color='primary' className={style.submit}>
                {trans.admin_account.submit}
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button onClick={onReset} variant='contained' color='primary' className={style.submit}>
                {trans.admin_account.reset}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Admin_Sign_Up
