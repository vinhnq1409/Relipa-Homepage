import React, { useRef, useState } from 'react'
import Admin from 'layouts/Admin.js'
import { TextField, Button, FormHelperText, Grid, CircularProgress, ButtonGroup } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react'
import { initMCE } from '../../../sampleData/initMCE'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import style from '../../../styles/admin/StaticPage.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import useTrans from '../../../i18n/useTrans'

export default function AdminEditStaticPage() {
  const trans = useTrans()
  const [loading, setLoading] = useState(false)
  const editorRef = useRef(null)

  const defaultValues = {
    title: '',
    meta: '',
    url: ''
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('this field needs to be filled out'),
    meta: Yup.string().required('this field needs to be filled out'),
    url: Yup.string()
      .required('this field needs to be filled out')
      .matches(
        /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        'Enter correct url!'
      )
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onSubmit = (data, e) => {
    if (editorRef.current) {
    }
  }

  const onReset = () => {
    reset({
      ...defaultValues
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <Grid item xs={7}>
            <Controller
              name='url'
              control={control}
              render={({ field }) => (
                <TextField
                  label={trans.static_page.url_path}
                  id='outlined-required'
                  variant='outlined'
                  placeholder={trans.static_page.placeholder_url}
                  {...field}
                  fullWidth
                />
              )}
            />
            {errors.url && <FormHelperText error>{errors.url.message}</FormHelperText>}
          </Grid>

          <Grid item xs={3}>
            <Button variant='outlined' color='primary' className={style.buttonAuth} fullWidth>
              {trans.static_page.authorized}
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={10}>
            <Editor id='editor' onInit={(evt, editor) => (editorRef.current = editor)} init={initMCE} />
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent='center'>
          <Grid container justifyContent='center'>
            <ButtonGroup color='primary'>
              <Button type='submit' variant='contained' color='primary' className={style.buttonSubmit}>
                {trans.static_page.submit}
              </Button>

              <Button onClick={onReset} variant='contained' color='primary' className={style.buttonSubmit}>
                {trans.static_page.reset}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

AdminEditStaticPage.layout = Admin
