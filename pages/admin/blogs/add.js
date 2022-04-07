import Admin from 'layouts/Admin.js'
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { apiKey, initFullProps } from '../../../variables/initFullProps'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

export default function Add({ valueHTML }) {
  const editorRef = useRef(null)
  const router = useRouter()
  const [data, setData] = useState('')

  useEffect(() => {
    if (valueHTML) {
      setData(valueHTML)
    }
  }, [])

  const handleUpdate = (newValue) => {
    setData(newValue)
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    desc: Yup.string()
      .required('Description is required'),
    meta: Yup.string()
      .required('Meta is required'),
    title: Yup.string()
      .required('Title is required'),
    tags: Yup.string()
      .required('Tags is required'),
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

  const onCreate = (data) => {
    let newData
    if (editorRef.current) {
      newData = {
        ...data,
        content: editorRef.current.getContent()
      }
    }
    console.log(newData)
  }
  const onUpdate = (data) => {
    let newData
    if (editorRef.current) {
      newData = {
        ...data,
        content: editorRef.current.getContent()
      }
    }
    console.log(newData)
  }
  const onResetURL = (data) => {
    const { title } = data
    const resetFriendlyUrl = title.trim().replace(/ /g, '-')
    setValue('friendly_url', resetFriendlyUrl)
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
              name='title'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='title'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.title && <Typography>{errors.title.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='desc'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='description'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.desc && <Typography>{errors.desc.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='meta'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='meta'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.meta && <Typography>{errors.meta.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='tags'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='tags'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.tags && <Typography>{errors.tags.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='url_image_meta'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='url meta image'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.url_image_meta && <Typography>{errors.url_image_meta.message}</Typography>}
          </Grid>
          <Grid item xs={10}>
            <Controller
              name='friendly_url'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='url friendly'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.friendly_url && <Typography>{errors.friendly_url.message}</Typography>}
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleSubmit(onResetURL)} variant='contained' color='primary' fullWidth>
              Reset URL
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Editor
              id='editor'
              value={data}
              apiKey={apiKey}
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(newValue) => handleUpdate(newValue)}
              init={{
                ...initFullProps
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit(onCreate)} variant='contained' color='primary'>
              Create
            </Button>
            <Button onClick={handleSubmit(onUpdate)} variant='contained' color='primary'>
              Update
            </Button>
            <Button onClick={onCancel} variant='contained' color='primary'>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
Add.layout = Admin