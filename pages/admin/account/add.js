import React, { useEffect, useState } from 'react'
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
  FormHelperText,
  CircularProgress
} from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import useTrans from '../../../i18n/useTrans'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import style from '../../../styles/admin/AdminAccount.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { get, post } from '../../../api/BaseRequest'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from 'react-query'

export default function AdminAddAcount() {
  const router = useRouter()
  const trans = useTrans()
  const [userId, ] = useState(router.query.id)
  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState([])

  const getUser = () => get(`users/${userId}`)

  const {data: dataUser, isLoading} = useQuery(`getUser`, getUser)

  console.log(dataUser.data)

  const defaultValue = {
    name: '',
    email: '',
    password: '',
    re_password: '',
    roles: []
  }


  const listRole = [
    { id: 1, name: 'Super Admin' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Member' },
    { id: 4, name: 'Partner' },
    { id: 5, name: 'Employee' }
  ]

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
    if (showPassword === false) {
      setType('text')
    } else {
      setType('password')
    }
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm({ defaultValues: dataUser?.data, resolver: yupResolver(schema) })

  const schema = Yup.object().shape({
    name: Yup.string().required('Please enter usename in fill'),
    email: Yup.string().required('Please enter email in fill'),
    password: Yup.string()
      .min(8, 'Password must be at least ')
      .max(30, 'Password too long')
      .required('new password is required'),
    re_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const handleChangeRole = (event) => {
    setRole(event.target.value)
  }

  const postUser = async (data) => {
    return await post('users', data)
  }

  const { mutate: postUserAPI, isLoading: isPostingUserAPI } = useMutation(postUser)

  const onSubmit = (data) => {
    const paramApi = {
      ...data
    }
    postUserAPI(paramApi)
    toast.success('Create account success', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      reset({ ...defaultValue })
      router.push({ pathname: 'account' })
    }, 2000)
  }

  const onError = (data) => {
    toast.warn('Please fill out the form completely', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  const onReset = () => {
    reset({
      ...defaultValue
    })
  }
  return (
    <>
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
                      <Select
                        labelId='roles'
                        multiple
                        defaultValue={0}
                        onChange={handleChangeRole}
                        // input = {<Input />}
                        fullWidth
                        // renderValue={(selected) => console.log(selected)}
                        {...field}
                      >
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
        <div>{loading && <CircularProgress />}</div>
      </Container>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

AdminAddAcount.layout = Admin
