import React, { useRef, useState } from 'react'
import Admin from 'layouts/Admin.js'
import { TextField, Button, FormHelperText, Grid } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react'
import { initMCE } from '../../../sampleData/initMCE'
import { Controller, useForm } from 'react-hook-form'
import { post } from '../../../api/BaseRequest'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useTrans from '../../../i18n/useTrans'
import BtnLoading from '../../../components/button/BtnLoading'
import style from '../../../styles/admin/StaticPage.module.css'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

export default function AdminEditStaticPage() {
  const trans = useTrans()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const editorRef = useRef(null)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })

  const postStaticPage = async(data) => await post(`static-page`, data)

  const { mutate } = useMutation(postStaticPage, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Create success'
      })
      setLoading(true)
      setTimeout(() => {
        setLoading(true)
        router.push({ pathname: '/admin/static_page' })
      }, 2000)
    },
    onError: (error) => {
      const { data } = error.response
      setSnackbar({
        open: true,
        message: Object.values(data.errors)[0],
        severity: 'error'
      })
    }
  })

  const defaultValues = {
    title: '',
    author: '',
    meta: '',
    friendly_url: ''
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('this field needs to be filled out'),
    author: Yup.string().required('this field needs to be filled out'),
    meta: Yup.string().required('this field needs to be filled out'),
    friendly_url: Yup.string().required('this field needs to be filled out')
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onPictureUpload = async(e) => {
    const formData = new FormData()
    formData.append(
      'file',
      e.target.files[0],
      e.target.files[0].name
    )
    const { location } = await post('media', formData)
    setValue('url_image_meta', `http://${location}`)
  }

  const onResetURL = (data) => {
    const { title } = data
    const resetFriendlyUrl = title.trim().replace(/ /g, '-')
    setValue('friendly_url', resetFriendlyUrl)
  }

  const onSubmit = (data) => {
    if (editorRef.current) {
      const newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      mutate(newData)
    }
  }

  const onReset = () => {
    reset({
      ...defaultValues
    })
  }

  const onCancel = () => {
    router.push({ pathname: '/admin/static_page' })
  }
  return (
    <>
      <form>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={10}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField
                  label={trans.static_page.title}
                  id='outlined-required'
                  variant='outlined'
                  placeholder={trans.static_page.placeholder_title}
                  {...field}
                  fullWidth
                />
              )}
            />
            {errors.title && <FormHelperText error>{errors.title.message}</FormHelperText>}
          </Grid>

          <Grid item xs={10}>
            <Controller
              name='author'
              control={control}
              render={({ field }) => (
                <TextField
                  label={trans.static_page.author}
                  id='outlined-required'
                  variant='outlined'
                  placeholder={trans.static_page.placeholder_author}
                  {...field}
                  fullWidth
                />
              )}
            />
            {errors.author && <FormHelperText error>{errors.author.message}</FormHelperText>}
          </Grid>

          <Grid item xs={10}>
            <Controller
              name='meta'
              control={control}
              render={({ field }) => (
                <TextField
                  label={trans.static_page.describe}
                  id='outlined-required'
                  variant='outlined'
                  placeholder={trans.static_page.placeholder_describe}
                  {...field}
                  multiline
                  minRows={5}
                  fullWidth
                />
              )}
            />
            {errors.meta && <FormHelperText error>{errors.meta.message}</FormHelperText>}
          </Grid>

          <Grid item xs={8}>
            <Controller
              name='url_image_meta'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label='URL meta image'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.url_image_meta && <FormHelperText>{errors.url_image_meta.message}</FormHelperText>}
          </Grid>

          <Grid item xs={2}>
            <input
              accept='image/*'
              className={style.buttonNone}
              id='contained-button-file'
              multiple
              type='file'
              onChange={onPictureUpload}
            />
            <label htmlFor='contained-button-file'>
              <Button className={style.full} variant='contained' color='primary' component='span'>
                {trans.static_page.upload}
              </Button>
            </label>
          </Grid>

          <Grid item xs={8}>
            <Controller
              name='friendly_url'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label='URL friendly'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.friendly_url && <FormHelperText>{errors.friendly_url.message}</FormHelperText>}
          </Grid>

          <Grid item xs={2}>
            <Button fullWidth className= {style.buttonAuth} onClick={handleSubmit(onResetURL)} variant='contained' color='primary'>
              Reset URL
            </Button>
          </Grid>

          <Grid item xs={10}>
            <Editor id='editor' onInit={(evt, editor) => (editorRef.current = editor)} init={initMCE} />
          </Grid>

          <Grid item xs={10} className = {style.buttonCenter}>
            <BtnLoading className={style.button} loading={loading} onClick={handleSubmit(onSubmit)} btnName = {trans.static_page.createNew} color='primary' />
            <Button onClick={onReset} className={style.button} variant = 'contained' color='secondary'>{trans.static_page.reset}</Button>
            <Button onClick={onCancel} className={style.button} variant = 'contained'>{trans.static_page.cancel}</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

AdminEditStaticPage.layout = Admin
