import Admin from 'layouts/Admin.js'
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Grid, Input, TextField, Typography } from '@material-ui/core'
import { apiKey, initFullProps } from '../../../sampleData/initFullProps'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import styles from '../../../styles/AdminBlogs.module.css'
import { get, post, put } from '../../../api/BaseRequest'
import { useQuery, useMutation } from 'react-query'
import BtnLoading from '../../../components/button/BtnLoading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

export default function AddNews() {
  const editorRef = useRef(null)
  const router = useRouter()
  const { id } = router.query
  const [valueEditor, setValueEditor] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })

  const getNews = async () => {
    return await get(`news/${id}`)
  }

  const postNews = async (data) => {
    return await post('news', data)
  }

  const putNews = async (data) => {
    return await put(`news/${id}`, data)
  }

  const { data: dataNews, remove: removeData } = useQuery('getNews', getNews, { enabled: !!id })

  const { mutate: postNewsAPI, isLoading: isPostingNewsAPI } = useMutation(postNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Create success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/news/')
      }, 2000)
    },
    onError: (error) => {
      const listError = Object.values(error.response.data.errors)
      listError.forEach((element) => {
        setSnackbar({ message: element, open: true, severity: 'error' })
      })
    }
  })

  const { mutate: putNewsAPI, isLoading: isPutingNewsAPI } = useMutation(putNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Edit success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/news/')
      }, 2000)
    },
    onError: (error) => {
      const listError = Object.values(error.response.data.errors)
      listError.forEach((element) => {
        setSnackbar({ message: element, open: true, severity: 'error' })
      })
    }
  })

  useEffect(() => {
    if (!router.query.id) {
      removeData()
    }
  }, [])

  useEffect(() => {
    setValue('title', dataNews?.data.title)
    setValue('desc', dataNews?.data.desc)
    setValue('meta', dataNews?.data.meta)
    setValue('url_image_meta', dataNews?.data.url_image_meta)
    setValue('friendly_url', dataNews?.data.friendly_url)
    setValueEditor(dataNews?.data.content)
  }, [dataNews])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(10, 'The title must be at least 10 characters'),
    desc: Yup.string().required('Description is required'),
    meta: Yup.string().required('Meta is required'),
    friendly_url: Yup.string().required('Url friendly is required'),
    url_image_meta: Yup.string()
      .required('Url image meta is required')
      .matches(
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        'Enter correct url!'
      )
  })

  const defaultValues = {
    title: '',
    desc: '',
    meta: '',
    url_image_meta: '',
    content: '',
    friendly_url: ''
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = (data) => {
    if (editorRef.current) {
      const newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      postNewsAPI(newData)
    }
  }
  const onUpdate = (data) => {
    if (editorRef.current) {
      const newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      putNewsAPI(newData)
    }
  }
  const onResetURL = () => {
    const valueTitle = getValues('title')
    const resetFriendlyUrl = valueTitle.trim().replace(/ /g, '-')
    setValue('friendly_url', resetFriendlyUrl)
  }

  const onFileUpload = async (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0], e.target.files[0].name)
    const { location } = await post('media', formData)
    setValue('url_image_meta', `http://${location}`)
  }

  const onCancel = () => {
    router.push('/admin/news')
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
              name='desc'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label='Description'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.desc && <Typography className={styles.error}>{errors.desc.message}</Typography>}
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
              type='file'
              accept='image/*'
              onChange={onFileUpload}
              style={{ display: 'none' }}
              id='contained-button-file'
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
            <Button className={styles.full} onClick={handleSubmit(onResetURL)} variant='contained' color='primary'>
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
            {!id && <BtnLoading loading={isPostingNewsAPI} onClick={handleSubmit(onCreate)} btnName='Create' color='primary' />}
            {id && <BtnLoading loading={isPutingNewsAPI} onClick={handleSubmit(onUpdate)} btnName='Update' color='primary' />}
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
AddNews.layout = Admin
