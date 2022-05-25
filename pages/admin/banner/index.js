import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/Banner/Table'
import Button from '@material-ui/core/Button'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get, post } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import styles from '../../../styles/AdminBlogs.module.css'


const tableHead = ['Id', 'Banner', 'API', 'Created_at', 'Status', 'Action']

export default function Banner() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [params, setParams] = useState({
    title: '',
    sort: '',
    start: null,
    end: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1,
  })

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: '',
  })

  const getBanner = () => {
    return get('banner', params)
  }

  const postBanner = async(data) => {
    return await post('banner', data)
  }

  const deleteBanner = (bannerId) => {
    return del(`banner/${bannerId}`)
  }

  const { data, refetch } = useQuery(['admin/banner', params.per_page, params.page], getBanner)
  const { mutate } = useMutation(deleteBanner, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Delete failed!',
        type: 'error',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/banner')
      setSnackbar({
        open: true,
        message: 'Delete success!',
        type: 'success',
      })
    },
  })

  const { mutate: postBannerAPI } = useMutation(postBanner, {
    onSuccess: () => {
      queryClient.invalidateQueries('admin/banner')
      setSnackbar({
        type: 'success',
        open: true,
        message: 'Post is successful'
      })
    },
    onError: (error) => {
      const { errors } = error.response.data
      setSnackbar({
        open: true,
        type: 'error',
        message: `Post is failed: ${Object.values(errors)[0][0]}` || 'POST is failed'
      })
    }
  })

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const onPictureUpload = async(e) => {
    const formData = new FormData()
    formData.append('image', e.target.files[0], e.target.files[0].name)
    formData.append('lang', router.locale)
    formData.append('status', 1)
    postBannerAPI(formData)
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/banner/add',
      query: { slug: 'about', mode: 'edit', id: id },
    })
  }

  const handleDelete = (id) => {
    mutate(id)
  }

  return (
    <>
      <input
        accept="image/*"
        className={styles.buttonNone}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onPictureUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <TableList
        namePage="/blogs"
        tableHead={tableHead}
        data={data?.data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
        count={data?.total / params.per_page}
      />
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.type}
        onClose={handleClose}
      />
    </>
  )
}

Banner.layout = Admin
