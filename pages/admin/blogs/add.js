import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Editor } from '@tinymce/tinymce-react'
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
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Admin from 'layouts/Admin.js'
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
  const [valueTag, setValueTag] = useState([])
  const [isErrorTag, setIsErrorTag] = useState(false)
  const [tagsRelipa, setTagsRelipa] = useState([])
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success',
  })
  const [paramsTags, setParamsTags] = useState({
    per_page: 20,
    page: 1,
    lang: router.locale,
  })

  const defaultValues = {
    title: '',
    desc: '',
    meta: '',
    url_image_meta: '',
    content: '',
    tags: '',
    friendly_url: '',
    lang: 'en',
    status: true,
    created_at: new Date()
  }

  const getBlog = async () => {
    return await get(`blogs/${id}`)
  }

  const postBlog = async (data) => {
    return await post('blogs', data)
  }

  const putBlog = async (data) => {
    return await post(`blogs/${id}`, data)
  }

  const getTags = () => {
    return get('tags', paramsTags)
  }

  const {
    data: dataBlog,
    remove: removeBlogs,
    isLoading: isGetBlogAPI,
  } = useQuery('getBlog', getBlog, { enabled: !!id })

  const { data: dataTags } = useQuery(['admin/tags', paramsTags.page, paramsTags.per_page, paramsTags.lang], getTags)

  const { mutate: postBlogAPI, isLoading: isPostingBlogAPI } = useMutation(postBlog, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Post is successful',
      })
      setTimeout(() => {
        router.push('/admin/blogs')
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

  const { mutate: putBlogAPI, isLoading: isPutingBlogAPI } = useMutation(putBlog, {
    onSuccess: () => {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Update is successful',
      })
      setTimeout(() => {
        router.push('/admin/blogs')
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
      removeBlogs()
    }
    if (dataBlog) {
      const tags = []
      for (const tag of dataBlog?.data.tags) {
        tags.push(tag.name)
      }
      setValueTag(tags)
      setValue('title', dataBlog?.data.title)
      setValue('desc', dataBlog?.data.desc)
      setValue('meta', dataBlog?.data.meta)
      setValue('url_image_meta', dataBlog?.data.url_image_meta)
      setValue('tags', dataBlog?.data.tags)
      setValue('friendly_url', dataBlog?.data.friendly_url)
      setValue('lang', dataBlog?.data.lang)
      setValue('status', dataBlog?.data.status)
      setValue('created_at', dataBlog?.data.created_at)
      setValueEditor(dataBlog?.data.content)
      setParamsTags({ ...paramsTags, lang: dataBlog.data.lang })
    }
    return () => {
      setParamsTags({ ...paramsTags, lang: router.locale })
      onReset()
    }
  }, [dataBlog])

  useEffect(() => {
    dataTags ? setTagsRelipa(dataTags.data) : null
  }, [dataTags, dataBlog])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(3, 'The title must be at least 3 characters'),
    desc: Yup.string().required('Description is required'),
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
      ),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = (data) => {
    if (editorRef.current && valueTag.length) {
      setIsErrorTag(false)
      const newData = {
        ...data,
        lang: data.lang,
        status: +data.status,
        tags: valueTag,
        friendly_url: data.friendly_url.toLowerCase(),
        content: editorRef.current.getContent(),
        created_at: moment(data.created_at).format("DD-MM-YYYY")
      }
      postBlogAPI(newData)
    } else {
      setIsErrorTag(true)
    }
  }

  const onUpdate = (data) => {
    if (editorRef.current && valueTag.length) {
      setIsErrorTag(false)
      const newData = {
        ...data,
        lang: data.lang,
        status: +data.status,
        tags: valueTag,
        friendly_url: data.friendly_url.toLowerCase(),
        content: editorRef.current.getContent(),
        created_at: moment(data.created_at).format("DD-MM-YYYY"),
        _method: 'PUT',
      }
      putBlogAPI(newData)
    } else {
      setIsErrorTag(true)
    }
  }

  const onPictureUpload = async (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0], e.target.files[0].name)
    const { location } = await post('media', formData)
    setValue('url_image_meta', location)
  }

  const onResetURL = () => {
    const valueTitle = getValues('title')
    const resetFriendlyUrl = valueTitle?.trim().replace(/\//g, '').replace(/ /g, '-').replace(/\?/g, '').toLowerCase()
    setValue('friendly_url', resetFriendlyUrl)
  }

  const onReset = () => {
    setValueEditor('')
    setValueTag([])
    reset({
      ...defaultValues,
    })
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
              name="title"
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label="Title" id="outlined-required" variant="outlined" {...field} />
              )}
            />
            {errors.title && <Typography className={styles.error}>{errors.title.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label="Description"
                  id="outlined-required"
                  variant="outlined"
                  {...field}
                />
              )}
            />
            {errors.desc && <Typography className={styles.error}>{errors.desc.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="created_at"
              control={control}
              defaultValue={new Date()}
              rules={{ required: true }}
              render={({ field: { ref, ...rest } }) => (
                <Fragment>
                  <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <KeyboardDatePicker
                     margin="normal"
                     id="date-picker-dialog"
                     format="DD/MM/YYYY"
                     label="Create date"
                     initialFocusedDate={Date.now()}
                     KeyboardButtonProps={{
                        "aria-label": "change end date",
                     }}
                     invalidDateMessage={"date is not in correct format"}
                     {...rest}
                    />
                  </MuiPickersUtilsProvider>
                </Fragment>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="meta"
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label="Meta" id="outlined-required" variant="outlined" {...field} />
              )}
            />
            {errors.meta && <Typography className={styles.error}>{errors.meta.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={tagsRelipa.map((option) => option.name)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => <TextField {...params} variant="outlined" label="Tags" placeholder="Add tag" />}
              value={valueTag}
              onChange={(event, value) => {
                value.length ? setIsErrorTag(false) : setIsErrorTag(true)
                setValueTag(value)
              }}
            />
            {isErrorTag && <Typography className={styles.error}>Tags is required</Typography>}
          </Grid>
          <Grid item xs={10}>
            <Controller
              name="url_image_meta"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label="URL meta image"
                  id="outlined-required"
                  variant="outlined"
                  {...field}
                />
              )}
            />
            {errors.url_image_meta && <Typography className={styles.error}>{errors.url_image_meta.message}</Typography>}
          </Grid>
          <Grid item xs={2}>
            <input
              accept="image/*"
              className={styles.buttonNone}
              id="contained-button-file"
              multiple
              type="file"
              onChange={onPictureUpload}
            />
            <label htmlFor="contained-button-file">
              <Button className={styles.full} variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={10}>
            <Controller
              name="friendly_url"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label="URL friendly"
                  id="outlined-required"
                  variant="outlined"
                  {...field}
                />
              )}
            />
            {errors.friendly_url && <Typography className={styles.error}>{errors.friendly_url.message}</Typography>}
          </Grid>
          <Grid item xs={2}>
            <Button className={styles.full} onClick={onResetURL} variant="contained" color="primary">
              Reset URL
            </Button>
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
          <Grid item xs={12}>
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormControlLabel
                  control={
                    <Checkbox name="checked" color="primary" onChange={onChange} onBlur={onBlur} checked={value} />
                  }
                  label="Public"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Editor
              id="editor"
              value={valueEditor}
              apiKey={apiKey}
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(newValueEditor) => setValueEditor(newValueEditor)}
              init={{
                ...initFullProps,
              }}
            />
          </Grid>
          <Grid item xs={12} className={styles.flexCenter}>
            {!id && (
              <BtnLoading
                loading={isGetBlogAPI || isPostingBlogAPI}
                onClick={handleSubmit(onCreate)}
                btnName="Create"
                color="primary"
              />
            )}
            {id && (
              <BtnLoading
                loading={isGetBlogAPI || isPutingBlogAPI}
                onClick={handleSubmit(onUpdate)}
                btnName="Update"
                color="primary"
              />
            )}
            <Button onClick={onReset} className={styles.button} variant="contained" color="secondary">
              Reset
            </Button>
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
