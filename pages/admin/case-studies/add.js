import * as Yup from 'yup'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import { Autocomplete } from '@material-ui/lab'
import DeleteIcon from '@material-ui/icons/Delete'
import { useQuery, useMutation } from 'react-query'
import ImageUploading from 'react-images-uploading'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import React, { useEffect, useRef, useState } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button, Chip, Grid, TextField, Typography } from '@material-ui/core'

import styles from '../../../styles/AdminBlogs.module.css'
import { get, post, put } from '../../../api/BaseRequest'
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
  const [isErrTechnology, setIsErrTechnology] = useState(false)
  const [responContent, setResponContent] = useState([])
  const [isErrResponContent, setIsErrRescontent] = useState(false)
  const [updateImg, setUpdateImg] = useState(false)
  const [tags, setTags] = useState([])
  const [isErrTags, setIsErrTags] = useState(false)
  const maxNumber = 10

  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })

  const defaultValues = {
    title: '',
    desc: '',
    type_of_contract: '',
    team_structure: '',
    technology: [],
    responsible_content: [],
    tags: [],
    content: ''
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
    data: dataNews,
    remove: removeData,
    isLoading: isGetingNewsAPI
  } = useQuery('getCaseStudy', getNews, { enabled: !!id })

  const { mutate: postNewsAPI, isLoading: isPostingNewsAPI } = useMutation(postNews, {
    onSuccess: () => {
      setSnackbar({ message: 'Create success !!', open: true, severity: 'success' })
      setTimeout(() => {
        router.push('/admin/case-studies/')
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
        router.push('/admin/case-studies/')
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
    setValue('title', dataNews?.title)
    setValue('desc', dataNews?.desc)
    setValue('type_of_contract', dataNews?.type_of_contract)
    setValue('team_structure', dataNews?.team_structure)
    setValue('content', dataNews?.content)
    setTechnology(dataNews?.technology || [])
    setResponContent(dataNews?.responsible_content || [])
    setTags(dataNews?.tags || [])
    setImages(
      dataNews?.works.map((item, index) => ({
        data_url: `http://${item}`,
        file: dataNews?.media[index]
      }))
    )
  }, [dataNews])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(10, 'The title must be at least 10 characters'),
    desc: Yup.string().required('Description is required'),
    type_of_contract: Yup.string().required('Type of contact is required'),
    team_structure: Yup.string().required('Team structure is required'),
    content: Yup.string().required('Content i required')
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    reset
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onCreate = async (data) => {
    if (technology.length && responContent.length && tags.length && images.length >= 3) {
      setIsErrTechnology(false)
      setIsErrRescontent(false)
      setIsErrTags(false)
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
        responsible_content: responContent
      }

      formData.append('title', newData.title)
      formData.append('desc', newData.desc)
      formData.append('content', newData.content)
      formData.append('type_of_contract', newData.type_of_contract)
      formData.append('technology[]', newData.technology)
      formData.append('responsible_content[]', newData.responsible_content)
      formData.append('team_structure', newData.team_structure)
      formData.append('tags[]', newData.tags)
      postNewsAPI(formData)
    } else {
      if (!technology.length) {
        setIsErrTechnology(true)
      }
      if (!responContent.length) {
        setIsErrRescontent(true)
      }
      if (!tags.length) {
        setIsErrTags(true)
      }
      if (!(images.length >= 3)) {
        setIsErrImgs(true)
      }
    }
  }

  const onUpdate = (data) => {
    if (technology.length && responContent.length && tags.length && images.length >= 3) {
      setIsErrTechnology(false)
      setIsErrRescontent(false)
      setIsErrImgs(false)
      setIsErrTags(false)

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
        tags: tags
      }

      formData.append('title', newData.title)
      formData.append('desc', newData.desc)
      formData.append('content', newData.content)
      formData.append('type_of_contract', newData.type_of_contract)
      formData.append('technology[]', newData.technology)
      formData.append('responsible_content[]', newData.responsible_content)
      formData.append('team_structure', newData.team_structure)
      formData.append('tags[]', newData.tags)
      formData.append('_method', 'PUT')
      putNewsAPI(formData)
    } else {
      if (!technology.length) {
        setIsErrTechnology(true)
      }
      if (!responContent.length) {
        setIsErrRescontent(true)
      }
      if (!tags.length) {
        setIsErrTags(true)
      }
      if (!(images.length >= 3)) {
        setIsErrImgs(true)
      }
    }
  }

  const onReset = () => {
    setTechnology([])
    setResponContent([])
    setTags([])
    reset({
      ...defaultValues
    })
    btnRemoveImg.current.click()
  }

  const onChangeImg = (imageList) => {
    setUpdateImg(true)
    setImages(imageList)
  }

  const onCancel = () => {
    router.push('/admin/case-studies')
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
              name='content'
              control={control}
              render={({ field }) => (
                <TextField fullWidth multiline label='content' id='outlined-required' variant='outlined' {...field} />
              )}
            />
            {errors.content && <Typography className={styles.error}>{errors.content.message}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='type_of_contract'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label='Type of contract'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.type_of_contract && (
              <Typography className={styles.error}>{errors.type_of_contract.message}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id='technology-filled'
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant='outlined' label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField {...params} variant='outlined' label='Technology' placeholder='Add technology' />
              )}
              value={technology}
              onChange={(event, value) => {
                value.length ? setIsErrTechnology(false) : setIsErrTechnology(true)
                setTechnology(value)
              }}
            />
            {isErrTechnology && <Typography className={styles.error}>Technology is required</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id='responseContent-filled'
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant='outlined' label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='outlined'
                  label='Responsible Content'
                  placeholder='Add responsible content'
                />
              )}
              value={responContent}
              onChange={(event, value) => {
                value.length ? setIsErrRescontent(false) : setIsErrRescontent(true)
                setResponContent(value)
              }}
            />
            {isErrResponContent && <Typography className={styles.error}>Responsible content is required</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='team_structure'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  multiline
                  label='Team Structure'
                  id='outlined-required'
                  variant='outlined'
                  {...field}
                />
              )}
            />
            {errors.team_structure && <Typography className={styles.error}>{errors.team_structure.message}</Typography>}
          </Grid>

          <Grid item xs={12} container spacing={4} justifyContent='center'>
            <ImageUploading multiple value={images} onChange={onChangeImg} maxNumber={maxNumber} dataURLKey='data_url'>
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                <>
                  <Grid item xs={2}>
                    <Button
                      className={styles.full}
                      variant='contained'
                      color='primary'
                      component='span'
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
                      variant='contained'
                      color='primary'
                      component='span'
                      onClick={onImageRemoveAll}
                      startIcon={<DeleteIcon />}
                      id='contained-button-file'
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
                        <div key={index} className='image-item'>
                          <img src={image['data_url']} alt='' width='200' height='200' style={{ margin: '0 10px' }} />
                          <div className='image-item__btn-wrapper' style={{ margin: '0 10px 10px 10px' }}>
                            <Button
                              onClick={id ? onImageRemoveAll : () => onImageUpdate(index)}
                              variant='outlined'
                              size='small'
                              color='primary'
                              startIcon={<CloudUploadIcon />}
                            >
                              Update
                            </Button>
                            <Button
                              onClick={id ? onImageRemoveAll : () => onImageRemove(index)}
                              variant='outlined'
                              size='small'
                              color='primary'
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
              id='tags-filled'
              options={tagsRelipa.map((option) => option.title)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip variant='outlined' label={option} {...getTagProps({ index })} />)
              }
              renderInput={(params) => <TextField {...params} variant='outlined' label='Tags' placeholder='Add tag' />}
              value={tags}
              onChange={(event, value) => {
                value.length ? setIsErrTags(false) : setIsErrTags(true)
                setTags(value)
              }}
            />
            {isErrTags && <Typography className={styles.error}>Tags is required</Typography>}
          </Grid>
          <Grid item xs={12} className={styles.flexCenter}>
            {!id && (
              <BtnLoading
                loading={isGetingNewsAPI || isPostingNewsAPI}
                onClick={handleSubmit(onCreate)}
                btnName='Create'
                color='primary'
              />
            )}
            {id && (
              <BtnLoading
                loading={isGetingNewsAPI || isPutingNewsAPI}
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
Works.layout = Admin
