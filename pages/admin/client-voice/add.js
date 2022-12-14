import React, { useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import DeleteIcon from '@material-ui/icons/Delete'
import { useQuery, useMutation } from 'react-query'
import ImageUploading from 'react-images-uploading'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import {
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Admin from 'layouts/Admin.js'
import styles from '../../../styles/AdminBlogs.module.css'
import { get, post } from '../../../api/BaseRequest'
import BtnLoading from '../../../components/button/BtnLoading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

export default function Works() {
  const btnRemoveImg = useRef(null)
  const router = useRouter()
  const { id } = router.query

  const [images, setImages] = useState([])
  const [isErrImg, setIsErrImgs] = useState(false)
  const [updateImg, setUpdateImg] = useState(false)
  const maxNumber = 1

  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success',
  })

  const defaultValues = {
    title: '',
    desc: '',
    type_of_contract: '',
    team_structure: '',
    technology: [],
    responsible_content: [],
    tags: [],
    company: '',
    lang: 'en',
    status: true,
  }

  const getNews = async() => {
    return await get(`voice/${id}`)
  }

  const postNews = async(data) => {
    return await post('voice', data)
  }

  const putNews = async(data) => {
    return await post(`voice/${id}`, data)
  }

  const {
    data: dataVoice,
    remove: removeData,
    isLoading: isGetingNewsAPI,
  } = useQuery('getCaseStudy', getNews, { enabled: !!id })

  const { mutate: postNewsAPI, isLoading: isPostingNewsAPI } = useMutation(postNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Create success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/client-voice/')
      }, 2000)
    },
    onError: (error) => {
      const listError = Object.values(error.response.data.errors)
      listError.forEach((element) => {
        setSnackbar({ message: element, open: true, severity: 'error' })
      })
    },
  })

  const { mutate: putNewsAPI, isLoading: isPutingNewsAPI } = useMutation(putNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Edit success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/client-voice/')
      }, 2000)
    },
    onError: (error) => {
      const listError = Object.values(error.response.data.errors)
      listError.forEach((element) => {
        setSnackbar({ message: element, open: true, severity: 'error' })
      })
    },
  })

  useEffect(() => {
    if (!router.query.id) {
      removeData()
    }
  }, [])

  useEffect(() => {
    if (dataVoice) {
      setValue('title', dataVoice?.title)
      setValue('desc', dataVoice?.desc)
      setValue('company', dataVoice?.company)
      setValue('lang', dataVoice?.lang)
      setValue('status', dataVoice?.status)
      if (dataVoice?.voice) {
        setImages(
          dataVoice?.voice.map((item, index) => ({
            data_url: item,
            file: dataVoice?.media[index],
          }))
        )
      }
    }
    return () => onReset()
  }, [dataVoice])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    desc: Yup.string().required('Description is required'),
    company: Yup.string().required('Content i required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = async(data) => {
    if (images) {
      setIsErrImgs(false)
      const formData = new FormData()
      if (updateImg) {
        formData.append('image', images[0].file, images[0].file.name)
      }
      formData.append('title', data.title)
      formData.append('company', data.company)
      formData.append('desc', data.desc)
      formData.append('status', +data.status)
      formData.append('lang', data.lang)
      postNewsAPI(formData)
    } else {
      setIsErrImgs(true)
    }
  }

  const onUpdate = (data) => {
    if (images) {
      setIsErrImgs(false)
      const formData = new FormData()
      if (updateImg) {
        formData.append('image', images[0].file, images[0].file.name)
      }
      formData.append('title', data.title)
      formData.append('company', data.company)
      formData.append('desc', data.desc)
      formData.append('status', +data.status)
      formData.append('lang', data.lang)
      formData.append('_method', 'PUT')
      putNewsAPI(formData)
    } else {
      setIsErrImgs(true)
    }
  }

  const onReset = () => {
    reset({
      ...defaultValues,
    })
    setImages([])
  }

  const onChangeImg = (imageList) => {
    setUpdateImg(true)
    setImages(imageList)
  }

  const onCancel = () => {
    router.push('/admin/client-voice')
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
              name="company"
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label="company" id="outlined-required" variant="outlined" {...field} />
              )}
            />
            {errors.company && <Typography className={styles.error}>{errors.company.message}</Typography>}
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
              render={({ field: { onChange, onBlur, value, ref }}) => (
                <FormControlLabel
                  control={
                    <Checkbox name="checked" color="primary" onChange={onChange} onBlur={onBlur} checked={value} />
                  }
                  label="Public"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} container spacing={4} justifyContent="center">
            <ImageUploading multiple value={images} onChange={onChangeImg} maxNumber={maxNumber} dataURLKey="data_url">
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,

                dragProps,
              }) => (
                <>
                  <Grid item xs={2}>
                    <Button
                      className={styles.full}
                      variant="contained"
                      color="primary"
                      component="span"
                      onClick={() => onImageUpdate(0)}
                      {...dragProps}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload img
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      ref={btnRemoveImg}
                      className={styles.full}
                      variant="contained"
                      color="primary"
                      component="span"
                      onClick={onImageRemoveAll}
                      startIcon={<DeleteIcon />}
                      id="contained-button-file"
                    >
                      Remove img
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      className={styles.formimgadd}
                      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image['data_url']} alt="" width="200" height="200" style={{ margin: '0 10px' }} />
                        </div>
                      ))}
                    </div>
                  </Grid>
                </>
              )}
            </ImageUploading>
            {isErrImg && <Typography className={styles.error}>The images must have at least 3 items.</Typography>}
          </Grid>
          <Grid item xs={12} className={styles.flexCenter}>
            {!id && (
              <BtnLoading
                loading={isGetingNewsAPI || isPostingNewsAPI}
                onClick={handleSubmit(onCreate)}
                btnName="Create"
                color="primary"
              />
            )}
            {id && (
              <BtnLoading
                loading={isGetingNewsAPI || isPutingNewsAPI}
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
Works.layout = Admin
