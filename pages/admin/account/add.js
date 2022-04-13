import React, { useEffect, useState, useMemo } from 'react'
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
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useTrans from '../../../i18n/useTrans'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { get, post, put } from '../../../api/BaseRequest'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from 'react-query'
import style from '../../../styles/admin/AdminAccount.module.css'
import 'react-toastify/dist/ReactToastify.css'

export default function AdminAddAcount() {
  const router = useRouter()
  const trans = useTrans()
  const { id } = router.query
  const [type, setType] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState([])
  const listRole = [
    { id: 1, name: 'Super Admin' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Editor' },
    { id: 4, name: 'Contributor' },
    { id: 5, name: 'Partner' }
  ]

  const getUser = async () => await get(`users/${id}`)

  const postUser = async (data) => await post('users', data)

  const putUser = async (data) => await put(`users/${id}`, data)

  const { data: dataUser, isLoading: isGettingUserAPI, status } = useQuery('getUser', getUser)

  const { mutate: postUserAPI, isLoading: isPostingUserAPI } = useMutation(postUser)

  const { mutate: putBlogAPI, isLoading: isPuttingUserAPI } = useMutation(putUser)

  useEffect(() => {
    if (dataUser) {
      setValue('name', dataUser?.data.name)
      setValue('email', dataUser?.data.email)
      setValue(
        'roles',
        dataUser?.data.roles?.map((item) => item.id)
      )
    }
  }, [dataUser])

  const schemaAdd = Yup.object().shape({
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

  const shemaEdit = Yup.object().shape({
    name: Yup.string().required('Please enter usename in fill'),
    email: Yup.string().required('Please enter email in fill'),
  })

  const defaultValue = {
    name: '',
    email: '',
    password: '',
    re_password: '',
    roles: []
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(router.query.mode === 'add' ? schemaAdd : shemaEdit)
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
      router.push({ pathname: '/' })
    }, 2000)
  }

  const onError = (data) => {
    console.log(data)
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

  const onEdit = (data) => {
    putUser({
      ...dataUser,
      name: data.name,
      email: data.email,
      roles: data.roles
    })
    router.push({pathname: '/admin/account'})
  }

  const onReset = () => {
    reset({
      ...defaultValue
    })
  }
  return (
    <>
      {router.query.mode === 'edit' ? (
        <Container component='main' maxWidth='sm'>
          <CssBaseline />
          <div className={style.paper}>
            <Avatar className={style.avatar} />
            <Typography component={'h1'} variant='h5' className={style.title}>
              {trans.admin_account.sign_up}
            </Typography>

            <form className={style.form} noValidate>
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
                          fullWidth
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
                  <Button onClick={handleSubmit(onEdit, onError)} variant='contained' color='primary' className={style.submit}>
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
      ) : (
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
                        <Select
                          labelId='roles'
                          multiple
                          defaultValue={0}
                          onChange={handleChangeRole}
                          fullWidth
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
      )}

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