import Admin from 'layouts/Admin.js'
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../../styles/AdminBlogs.module.css'
import { post, put } from '../../../api/BaseRequest'
import { resetNews } from '../../../redux/slices/newsSlice'
import { apiKey, initFullProps } from '../../../sampleData/initFullProps'

export default function AddNews() {
  const editorRef = useRef(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const { blog } = useSelector((state) => state.blog)
  const [valueEditor, setValueEditor] = useState('')

  useEffect(() => {
    if (Object.keys(blog).length !== 0) {
      setValue('title', blog.title)
      setValue('desc', blog.desc)
      setValue('meta', blog.meta)
      setValue('url_image_meta', blog.urlImageMeta)
      setValue('tags', blog.tags)
      setValue('friendly_url', blog.friendlyUrl)
      setValueEditor(blog.content)
    }
  }, [])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    desc: Yup.string().required('Description is required'),
    meta: Yup.string().required('Meta is required'),
    friendly_url: Yup.string().required('Url friendly is required'),
    tags: Yup.string().required('Tags is required'),
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
    tags: '',
    friendly_url: ''
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const postNewsAPI = (data) => {
    return post('URL', data)
  }

  const putNewsAPI = (data) => {
    return put('URL', data)
  }

  const usePostNews = () => {
    return useMutation(postNewsAPI)
  }

  const usePutNews = () => {
    return useMutation(putNewsAPI)
  }

  const { mutate: postNews } = usePostNews()
  const { mutate: putNews } = usePutNews()

  const onCreate = (data) => {
    if (editorRef.current) {
      let newData
      newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      postNews(newData)
    }
  }

  const onUpdate = (data) => {
    if (editorRef.current) {
      let newData
      newData = {
        ...data,
        content: editorRef.current.getContent()
      }
      putNews(newData)
    }
  }

  const onResetURL = (data) => {
    const { title } = data
    const resetFriendlyUrl = title.trim().replace(/ /g, '-')
    setValue('friendly_url', resetFriendlyUrl)
  }

  const onCancel = () => {
    dispatch(resetNews())
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
          <Grid item xs={12}>
            <Controller
              name='tags'
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label='Tags' id='outlined-required' variant='outlined' {...field} />
              )}
            />
            {errors.tags && <Typography className={styles.error}>{errors.tags.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
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
            <Button onClick={handleSubmit(onCreate)} className={styles.button} variant='contained' color='primary'>
              Create
            </Button>
            <Button onClick={handleSubmit(onUpdate)} className={styles.button} variant='contained' color='primary'>
              Update
            </Button>
            <Button onClick={onCancel} className={styles.button} variant='contained' color='primary'>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
AddNews.layout = Admin
