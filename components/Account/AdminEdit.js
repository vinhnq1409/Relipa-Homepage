import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useQuery, useMutation } from 'react-query'
import { useRouter } from 'next/router'
import { get, put } from '../../api/BaseRequest'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core'
import style from '../../styles/admin/AdminAccount.module.css'
import useTrans from '../../i18n/useTrans'
import { Dialogs } from '../Progress/Dialog'
import CustomizedSnackbars from '../CustomSnackbar'
import BtnLoading from '../button/BtnLoading'

export const AdminEdit = () => {
  const trans = useTrans()
  const router = useRouter()
  const { id } = router.query
  const [role, setRole] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const getRoles = async() => await get(`roles`)

  const getUser = async() => await get(`users/${id}`)

  const putUser = async(data) => await put(`users/${id}`, data)

  const { data: dataRoles } = useQuery(`getRoles`, getRoles)

  const { data: dataUser } = useQuery('getUser', getUser)

  const { mutate: putUserAPI } = useMutation(putUser, {
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
        message: 'Edit data account success'
      })
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        router.push({ pathname: '/admin/account' })
      }, 2000)
    }
  })

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

  const shemaEdit = Yup.object().shape({
    name: Yup.string().required('Please enter usename in fill'),
    email: Yup.string().required('Please enter email in fill')
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValue,
    resolver: yupResolver(shemaEdit)
  })

  const handleChangeRole = (event) => {
    setRole(event.target.value)
  }

  const onEdit = (data) => {
    setOpen(false)
    putUserAPI({
      ...dataUser,
      name: data.name,
      email: data.email,
      roles: data.roles
    })
  }

  const onReset = () => {
    reset({
      ...defaultValue
    })
  }

  const onCancel = () => {
    router.push({ pathname: '/admin/account' })
  }

  const handleConfirm = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <div className={style.paper}>
          <Avatar className={style.avatar} />
          <Typography component={'h1'} variant='h5' className={style.title}>
            {trans.admin_account.edit_page}
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
              <Grid item align='center' xs={12} className={style.contentBgLoading} spacing={3}>
                <BtnLoading loading={loading} onClick={handleConfirm} btnName={trans.admin_account.edit} color = 'primary' />
                <BtnLoading onClick={onReset} btnName={trans.admin_account.reset} color = 'secondary' />
                <BtnLoading onClick={onCancel} btnName={trans.admin_account.cancel} />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>

      <Dialogs
        open={open}
        handleCancel={handleCancel}
        title={'Change data'}
        content={'Are you sure you want to change the data?'}
        onClick={handleSubmit(onEdit)}
      />

      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  )
}
