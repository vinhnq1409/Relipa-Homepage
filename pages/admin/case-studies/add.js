import * as Yup from 'yup'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import Autocomplete from '@material-ui/lab/Autocomplete'
import DeleteIcon from '@material-ui/icons/Delete'
import { useQuery, useMutation } from 'react-query'
import ImageUploading from 'react-images-uploading'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import React, { useEffect, useRef, useState } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button, Chip, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import styles from '../../../styles/AdminBlogs.module.css'
import { get, post } from '../../../api/BaseRequest'
import BtnLoading from '../../../components/button/BtnLoading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import { tagsRelipa } from '../../../sampleData/tagsRelipa'

export default function Works() {
  const btnRemoveImg = useRef(null)
  const router = useRouter()
  const { id } = router.query

  const [images, setImages] = useState([])
  const [isErrImg, setIsErrImgs] = useState(false)
  const [technology, setTechnology] = useState([])
  const [responContent, setResponContent] = useState([])
  const [updateImg, setUpdateImg] = useState(false)
  const [tags, setTags] = useState([])
  const [type, setType] = useState(0)
  const maxNumber = 10

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
    content: '',
    lang: 'en',
  }

  const getNews = async () => {
    return await get(`works/${id}`)
  }

  const postNews = async (data) => {
    return await post('works', data)
  }

  const putNews = async (data) => {
    return await post(`works/${id}`, data)
  }

  const {
    data: dataWork,
    remove: removeData,
    isLoading: isGetingNewsAPI,
  } = useQuery('getCaseStudy', getNews, { enabled: !!id })

  const { mutate: postNewsAPI, isLoading: isPostingNewsAPI } = useMutation(postNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Create success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/products/')
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
        router.push('/admin/products/')
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
    if (dataWork) {
      setValue('title', dataWork?.title)
      setValue('desc', dataWork?.desc)
      setValue('type_of_contract', dataWork?.type_of_contract)
      setValue('team_structure', dataWork?.team_structure)
      setValue('content', dataWork?.content)
      setValue('lang', dataWork?.lang)
      setTechnology(dataWork?.technology || [])
      setResponContent(dataWork?.responsible_content || [])
      setTags(dataWork?.tags || [])
      if (dataWork?.works) {
        setImages(
          dataWork?.works.map((item, index) => ({
            data_url: `http://${item}`,
            file: dataWork?.media[index],
          }))
        )
      }
      setType(dataWork?.type || 5)
    }
    return () => onReset()
  }, [dataWork])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(10, 'The title must be at least 10 characters'),
    desc: Yup.string().required('Description is required'),

    content: Yup.string().required('Content i required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = async (data) => {
    if (images?.length >= 3) {
      setIsErrImgs(false)
      const formData = new FormData()
      const lengthListImg = images.length
      for (let i = 0; i < lengthListImg; i++) {
        formData.append('images[]', images[i].file, images[i].file.name)
      }

      const newData = {
        ...data,
        technology: technology,
        tags: tags,
        responsible_content: responContent,
        lang: data.lang,
        type: type,
      }

      if (type === 5) {
        delete newData.type
      }
      formData.append('title', newData.title)
      formData.append('desc', newData.desc)
      formData.append('content', newData.content)
      formData.append('type_of_contract', newData.type_of_contract)
      formData.append('technology[]', newData.technology)
      formData.append('responsible_content[]', newData.responsible_content)
      formData.append('team_structure', newData.team_structure)
      formData.append('tags[]', newData.tags)
      formData.append('lang', newData.lang)
      formData.append('type', newData?.type)
      postNewsAPI(formData)
    } else {
      if (!(images?.length >= 3)) {
        setIsErrImgs(true)
      }
    }
  }

  const onUpdate = (data) => {
    if (images?.length >= 3) {
      setIsErrImgs(false)

      const formData = new FormData()
      if (updateImg) {
        const lengthListImg = images.length
        for (let i = 0; i < lengthListImg; i++) {
          formData.append('images[]', images[i].file, images[i].file.name)
        }
      }

      const newData = {
        ...data,
        technology: technology,
        responsible_content: responContent,
        tags: tags,
        lang: data.lang,
      }

      if (type === 5) {
        delete newData.type
      }

      formData.append('title', newData.title)
      formData.append('desc', newData.desc)
      formData.append('content', newData.content)
      formData.append('type_of_contract', newData.type_of_contract)
      formData.append('technology[]', newData.technology)
      formData.append('responsible_content[]', newData.responsible_content)
      formData.append('team_structure', newData.team_structure)
      formData.append('tags[]', newData.tags)
      formData.append('type', newData?.type)
      formData.append('lang', newData.lang)
      formData.append('_method', 'PUT')
      putNewsAPI(formData)
    } else {
      if (!(images?.length >= 3)) {
        setIsErrImgs(true)
      }
    }
  }

  const onReset = () => {
    setTechnology([])
    setResponContent([])
    setTags([])
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
    router.push('/admin/products')
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
              name="content"
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label="content" id="outlined-required" variant="outlined" {...field} />
              )}
            />
            {errors.content && <Typography className={styles.error}>{errors.content.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="type_of_contract"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label="Type of contract"
                  id="outlined-required"
                  variant="outlined"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="technology-filled"
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Technology" placeholder="Add technology" />
              )}
              value={technology}
              onChange={(event, value) => {
                setTechnology(value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="responseContent-filled"
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Responsible Content"
                  placeholder="Add responsible content"
                />
              )}
              value={responContent}
              onChange={(event, value) => {
                setResponContent(value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="team_structure"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label="Team Structure"
                  id="outlined-required"
                  variant="outlined"
                  {...field}
                />
              )}
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
                      onClick={updateImg ? () => onImageUpload() : () => (onImageRemoveAll(), onImageUpload())}
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
                      Remove all img
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
                          <div className="image-item__btn-wrapper" style={{ margin: '0 10px 10px 10px' }}>
                            <Button
                              onClick={
                                id && updateImg === false
                                  ? () => (onImageRemoveAll(), onImageUpload())
                                  : () => onImageUpdate(index)
                              }
                              variant="outlined"
                              size="small"
                              color="primary"
                              startIcon={<CloudUploadIcon />}
                            >
                              Update
                            </Button>
                            <Button
                              onClick={
                                id && updateImg === false
                                  ? () => (onImageRemoveAll(), onImageUpload())
                                  : () => onImageRemove(index)
                              }
                              variant="outlined"
                              size="small"
                              color="primary"
                              startIcon={<DeleteIcon />}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Grid>
                </>
              )}
            </ImageUploading>
            {isErrImg && <Typography className={styles.error}>The images must have at least 3 items.</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => <TextField {...params} variant="outlined" label="Tags" placeholder="Add tag" />}
              value={tags}
              onChange={(event, value) => {
                setTags(value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={styles.full}>
              <InputLabel htmlFor="grouped-native-select" className={styles.full}>
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="grouped-native-select"
                value={type}
                onChange={(e) => {
                  setType(e.target.value)
                }}
                className={styles.full}
              >
                <MenuItem className={styles.full} value={5}>
                  All
                </MenuItem>
                <MenuItem className={styles.full} value={1}>
                  Web System
                </MenuItem>
                <MenuItem className={styles.full} value={2}>
                  Bussiness System
                </MenuItem>
                <MenuItem className={styles.full} value={3}>
                  Block Chain
                </MenuItem>
                <MenuItem className={styles.full} value={4}>
                  Appilcation
                </MenuItem>
              </Select>
            </FormControl>
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
