import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/Banner/Table'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get, post } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

const tableHead = ['Id', 'Banner', 'API', 'Created_at', 'Status','Numerical_Order', 'Action']

export default function Blogs() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [params, setParams] = useState({
    title: '',
    sort: '',
    start: null,
    end: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1
  })

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: ''
  })

  const getBanner = () => {
    return get('banner', params)
  }

  const deleteBanner = (bannerId) => {
    return del(`banner/${bannerId}`)
  }

  const postNumericalOrder = async (data) => {
    return await post('update-banner-numerical-order', data)
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

  console.log('re-render')

  const { mutate: NumericalOrder } = useMutation(postNumericalOrder, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Order failed!',
        type: 'error',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/banner')
      setSnackbar({
        open: true,
        message: 'Order success!',
        type: 'success',
      })
    },
  })

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleSearch = () => {
    refetch()
  }

  const handleCreate = () => {
    router.push('/admin/banner/add')
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

  const handleNumericalOrder = (data) =>{
    NumericalOrder(data)
  }

  return (
    <>
      <NewFilters
        header={'BLOG'}
        handleSearch={handleSearch}
        filters={params}
        setFilters={setParams}
        onCreate={handleCreate}
      />
      <TableList
        namePage='/blogs'
        tableHead={tableHead}
        data={data?.data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        handleNumericalOrder={handleNumericalOrder}
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

Blogs.layout = Admin
