import Admin from 'layouts/Admin.js'
Blogs.layout = Admin
import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { apiKey, initFullProps } from '../../../variables/initFullProps'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Blogs({ valueHTML }) {
  const editorRef = useRef(null)
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
    meta: Yup.string()
      .required('Meta is required'),
    url: Yup.string()
      .required('Url is required')
      .matches(
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        'Enter correct url!'
      )
  })

  const defaultValues = {
    title: '',
    meta: '',
    url: ''
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onSubmit = (data, e) => {
    let newData
    if (editorRef.current) {
      newData = {
        ...data,
        editor: editorRef.current.getContent()
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Controller
            name='title'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='Tiêu đề sau'
                id='outlined-required'
                variant='outlined'
                {...field}
              />
            )}
          />
          {errors.title && <Typography>{errors.title.message}</Typography>}
        </Grid>
        <Grid>
          <Controller
            name='meta'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='Tiêu đề sau'
                id='outlined-required'
                variant='outlined'
                {...field}
              />
            )}
          />
          {errors.meta && <Typography>{errors.meta.message}</Typography>}
        </Grid>
        <Grid>
          <Controller
            name='url'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='Đường dẫn thân thiện'
                id='outlined-required'
                variant='outlined'
                {...field}
              />
            )}
          />
          {errors.url && <Typography>{errors.url.message}</Typography>}
        </Grid>
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
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
    </>
  )
}
