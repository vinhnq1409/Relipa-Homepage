import Admin from 'layouts/Admin.js'
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { useQuery, useMutation } from 'react-query'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import styles from '../../../styles/AdminBlogs.module.css'
import { apiKey, initFullProps } from '../../../helper/initFullProps'
import { get, post, put } from '../../../api/BaseRequest'
import BtnLoading from '../../../components/button/BtnLoading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

export default function Add() {
  const editorRef = useRef(null)
  const router = useRouter()
  const { id } = router.query
  const [valueEditor, setValueEditor] = useState('')
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })
  const defaultValues = {
    title: '',
    meta: '',
    url_image_meta: '',
    content: '',
    friendly_url: ''
  }

  const getStaticPage = async() => {
    return await get(`static-page/${id}`)
  }

  const postStaticPage = async(data) => {
    return await post('static-page', data)
  }

  const putStaticPage = async(data) => {
    return await put(`static-page/${id}`, data)
  }

  const {
    data: dataStaticPage,
    remove: removeStaticPage,
    isLoading: isGetStaticPageAPI
  } = useQuery('getStaticPage', getStaticPage, { enabled: !!id })

  const { mutate: postStaticPageAPI, isLoading: isPostingStaticPageAPI } = useMutation(postStaticPage, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Create is successful'
      })
      setTimeout(() => {
        router.push('/admin/static_page')
      }, 2000)
    },
    onError: (error) => {
      const { errors } = error.response.data
      setSnackbar({
        open: true,
        severity: 'error',
        message: `Post is failed: ${Object.values(errors)[0][0]}` || 'POST is failed'
      })
    }
  })

  const { mutate: putStaticPageAPI, isLoading: isPutingStaticPageAPI } = useMutation(putStaticPage, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Update is successful'
      })
      setTimeout(() => {
        router.push('/admin/static_page')
      }, 2000)
    },
    onError: (error) => {
      const { errors } = error.response.data
      setSnackbar({
        open: true,
        severity: 'error',
        message: `Put is failed: ${Object.values(errors)[0][0]}` || 'Put is failed'
      })
    }
  })

  useEffect(() => {
    if (!id) {
      removeStaticPage()
    }
    setValue('title', dataStaticPage?.data.title)
    setValue('meta', dataStaticPage?.data.meta)
    setValue('url_image_meta', dataStaticPage?.data.url_image_meta)
    setValue('friendly_url', dataStaticPage?.data.friendly_url)
    setValueEditor(dataStaticPage?.data.content)
  }, [dataStaticPage])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(10, 'The title must be at least 10 characters'),
    meta: Yup.string().required('Meta is required'),
    friendly_url: Yup.string()
      .required('Url friendly is required')
      .matches(/^\S+$/, 'friendly_url is no spaces')
      .test('friendly url', 'friendly url no Vietnamese characters ', (value) => {
        if (value) {
          const result = value.match(/[^a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
          return !result
        }
      }),
    url_image_meta: Yup.string()
      .required('Url image meta is required')
      .matches(
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        'Enter correct url!'
      )
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    reset
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = (data) => {
    if (editorRef.current) {
      const newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      postStaticPageAPI(newData)
    }
  }
  const onUpdate = (data) => {
    if (editorRef.current) {
      const newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      putStaticPageAPI(newData)
    }
  }

  const onPictureUpload = async(e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0], e.target.files[0].name)
    const { location } = await post('media', formData)
    setValue('url_image_meta', location)
  }

  const onResetURL = () => {
    const valueTitle = getValues('title')
    const resetFriendlyUrl = valueTitle?.trim().replace(/ /g, '-')
    setValue('friendly_url', resetFriendlyUrl)
  }

  const onReset = () => {
    setValueEditor('')
    reset({
      ...defaultValues
    })
  }

  const onCancel = () => {
    router.push('/admin/static_page')
  }

  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label='Title' id='outlined-required' variant='outlined' {...field} />
              )}
            />
            {errors.title && <Typography className={styles.error}>{errors.title.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='meta'
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label='Meta' id='outlined-required' variant='outlined' {...field} />
              )}
            />
            {errors.meta && <Typography className={styles.error}>{errors.meta.message}</Typography>}
          </Grid>
          <Grid item xs={10}>
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
            {errors.url_image_meta && <Typography className={styles.error}>{errors.url_image_meta.message}</Typography>}
          </Grid>
          <Grid item xs={2}>
            <input
              accept='image/*'
              className={styles.buttonNone}
              id='contained-button-file'
              multiple
              type='file'
              onChange={onPictureUpload}
            />
            <label htmlFor='contained-button-file'>
              <Button className={styles.full} variant='contained' color='primary' component='span'>
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={10}>
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
            {errors.friendly_url && <Typography className={styles.error}>{errors.friendly_url.message}</Typography>}
          </Grid>
          <Grid item xs={2}>
            <Button className={styles.full} onClick={onResetURL} variant='contained' color='primary'>
              Reset URL
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Editor
              id='editor'
              value={valueEditor}
              apiKey={apiKey}
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(newValueEditor) => setValueEditor(newValueEditor)}
              init={{
                ...initFullProps
              }}
            />
          </Grid>
          <Grid item xs={12} className={styles.flexCenter}>
            {!id && (
              <BtnLoading
                loading={isGetStaticPageAPI || isPostingStaticPageAPI}
                onClick={handleSubmit(onCreate)}
                btnName='Create'
                color='primary'
              />
            )}
            {id && (
              <BtnLoading
                loading={isGetStaticPageAPI || isPutingStaticPageAPI}
                onClick={handleSubmit(onUpdate)}
                btnName='Update'
                color='primary'
              />
            )}
            <Button onClick={onReset} className={styles.button} variant='contained' color='secondary'>
              Reset
            </Button>
            <Button onClick={onCancel} className={styles.button} variant='contained'>
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
