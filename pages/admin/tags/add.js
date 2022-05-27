import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useQuery, useMutation } from 'react-query'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import {
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import Admin from 'layouts/Admin.js'
import { get, post } from '../../../api/BaseRequest'
import styles from '../../../styles/AdminBlogs.module.css'
import BtnLoading from '../../../components/button/BtnLoading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'


export default function Add() {
  const router = useRouter()
  const { id } = router.query
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success',
  })

  const defaultValues = {
    name: '',
    is_trend: false,
    lang: 'en',
  }

  const getTag = async () => {
    return await get(`tags/${id}`)
  }

  const postTag = async (data) => {
    return await post('tags', data)
  }

  const putTag = async (data) => {
    return await post(`tags/${id}`, data)
  }

  const { data: dataTag, remove: removeTags, isLoading: isGetBlogAPI } = useQuery('getTag', getTag, { enabled: !!id })

  const { mutate: postTagAPI, isLoading: isPostingTagAPI } = useMutation(postTag, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Post is successful',
      })
      setTimeout(() => {
        router.push('/admin/tags')
      }, 2000)
    },
    onError: (error) => {
      const { errors } = error.response.data
      setSnackbar({
        open: true,
        severity: 'error',
        message: `Post is failed: ${Object.values(errors)[0][0]}` || 'POST is failed',
      })
    },
  })

  const { mutate: putTagAPI, isLoading: isPutingTagAPI } = useMutation(putTag, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Update is successful',
      })
      setTimeout(() => {
        router.push('/admin/tags')
      }, 2000)
    },
    onError: (error) => {
      const { errors } = error.response.data
      setSnackbar({
        open: true,
        severity: 'error',
        message: `Put is failed: ${Object.values(errors)[0][0]}` || 'Put is failed',
      })
    },
  })

  useEffect(() => {
    if (!id) {
      removeTags()
    }
    setValue('name', dataTag?.data.name)
    setValue('is_trend', !!dataTag?.data.is_trend)
    setValue('lang', dataTag?.data.lang)
  }, [dataTag])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'The title must be at least 2 characters'),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = (data) => {
    const newData = {
      ...data,
      lang: data.lang,
      is_trend: +data.is_trend,
    }
    postTagAPI(newData)
  }

  const onUpdate = (data) => {
    const newData = {
      name: data.name,
      lang: data.lang,
      is_trend: +data.is_trend,
      _method: 'PUT',
    }
    putTagAPI(newData)
  }

  const onCancel = () => {
    router.push('/admin/blogs')
  }

  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label="Title" id="outlined-required" variant="outlined" {...field} />
              )}
            />
            {errors.title && <Typography className={styles.error}>{errors.title.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="is_trend"
                  control={control}
                  render={({ field }) => <Checkbox checked={field.value} color="primary" {...field} />}
                />
              }
              label="Tags is trend"
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="lang"
              control={control}
              render={({ field }) => (
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Lang</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    {...field}
                    label="Lang"
                    style={{ minWidth: 168 }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="vi">VietNam</MenuItem>
                    <MenuItem value="ja">Japan</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} className={styles.flexCenter}>
            {!id && (
              <BtnLoading
                loading={isGetBlogAPI || isPostingTagAPI}
                onClick={handleSubmit(onCreate)}
                btnName="Create"
                color="primary"
              />
            )}
            {id && (
              <BtnLoading
                loading={isGetBlogAPI || isPutingTagAPI}
                onClick={handleSubmit(onUpdate)}
                btnName="Update"
                color="primary"
              />
            )}
            <Button onClick={onCancel} className={styles.button} variant="contained">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  )
}
Add.layout = Admin
