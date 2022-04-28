import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from 'react-query'
import {
  Avatar,
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
import { get, post } from '../../api/BaseRequest'
import BtnLoading from '../../components/button/BtnLoading'
import CustomizedSnackbars from '../CustomSnackbar'

export const AdminSignUp = () => {
  const trans = useTrans()
  const router = useRouter()
  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState([])
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })

  const defaultValue = {
    name: '',
    email: '',
    password: '',
    re_password: '',
    roles: []
  }

  const getRoles = async () => await get(`roles`)

  const postUser = async (data) => await post('users', data)

  const { data: dataRoles } = useQuery(`getRoles`, getRoles)

  const { mutate: postUserAPI } = useMutation(postUser, {
    onError: (error) => {
      const { data } = error.response
      setSnackbar({
        open: true,
        message: Object.values(data.errors)[0],
        severity: 'error'
      })
    },
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Create account success'
      })
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        router.push({ pathname: '/admin/account' })
      }, 2000)
    }
  })

  const schemaAdd = Yup.object().shape({
    name: Yup.string().required(trans.admin.admin_account.schema_name),
    email: Yup.string().required(trans.admin.admin_account.schema_email),
    password: Yup.string()
      .min(8, trans.admin.admin_account.schema_password_min_8)
      .max(30, trans.admin.admin_account.schema_password)
      .required(trans.admin.admin_account.schema_password_max_30),
    re_password: Yup.string()
      .required(trans.admin.admin_account.schema_re_password)
      .oneOf([Yup.ref('password'), null], trans.admin.admin_account.schema_re_password_same)
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schemaAdd)
  })

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
    if (showPassword === false) {
      setType('text')
    } else {
      setType('password')
    }
  }

  const handleChangeRole = (event) => {
    setRole(event.target.value)
  }

  const onSubmit = (data) => {
    const paramApi = {
      ...data
    }
    postUserAPI(paramApi)
  }

  const onReset = () => {
    reset({
      ...defaultValue
    })
  }

  const onCancel = () => {
    router.push({ pathname: '/admin/account' })
  }

  return (
    <>
      <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <div className={style.paper}>
          <Avatar className={style.avatar} />
          <Typography component={'h1'} variant='h5' className={style.title}>
            {trans.admin.admin_account.sign_up}
          </Typography>

          <form className={style.form} noValidate>
            <Grid container spacing={2} justifyContent='center'>
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
                      label={trans.admin.admin_account.name}
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
                      label={trans.admin.admin_account.email}
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
                      label={trans.admin.admin_account.password}
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
                      label={trans.admin.admin_account.re_password}
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
                      <InputLabel id='roles'>{trans.admin.admin_account.role}</InputLabel>
                      <Select
                        labelId='roles'
                        multiple
                        defaultValue={0}
                        onChange={handleChangeRole}
                        fullWidth
                        {...field}
                      >
                        {dataRoles?.data.map((role) => (
                          <MenuItem key={role.id} value={role.id}>
                            {role.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  )}
                />
              </Grid>
              <Grid item xs={12} className={style.contentBgLoading}>
                <BtnLoading
                  loading={loading}
                  onClick={handleSubmit(onSubmit)}
                  btnName={trans.admin.admin_account.create}
                  color='primary'
                />
                <BtnLoading onClick={onReset} btnName={trans.admin.admin_account.reset} color='secondary' />
                <BtnLoading onClick={onCancel} btnName={trans.admin.admin_account.cancel} />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  )
}
