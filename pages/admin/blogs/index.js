import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/AdminNewBlog/Table'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

const tableHead = ['Id', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']

export default function Blogs() {
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

  const getBlogs = () => {
    return get('blogs', params)
  }

  const deleteBlog = (blogId) => {
    return del(`blogs/${blogId}`)
  }

  const { data, refetch } = useQuery(['admin/blogs', params.per_page, params.page], getBlogs)
  const queryClient = useQueryClient()
  const { mutate } = useMutation(deleteBlog, {
    onError: (error) => {
      setSnackbar({
        open: true,
        message: 'Delete failed!',
        type: 'error'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/blogs')
      setSnackbar({
        open: true,
        message: 'Delete success!',
        type: 'success'
      })
    }
  })

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleSearch = () => {
    refetch()
  }
  const handleResetForm = () => {
    setParams({
      title: '',
      sort: '',
      start: null,
      end: moment().format('YYYY-MM-DD'),
      per_page: 10,
      page: 1
    })
  }

  // --action--
  const handleView = (id) => {
    // console.log('View', id)
  }

  // Start code add blogs
  const router = useRouter()

  const handleCreate = () => {
    router.push('/admin/blogs/add')
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/blogs/add',
      query: { slug: 'about', mode: 'edit', id: '6' }
    })
  }

  // End code add blogs

  const handleDelete = (id) => {
    mutate(id)
  }

  return (
    <>
      <NewFilters
        header={'BLOG'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={params}
        setFilters={setParams}
        onCreate={handleCreate}
      />
      <TableList
        tableHead={tableHead}
        data={data?.data}
        onView={handleView}
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

Blogs.layout = Admin
