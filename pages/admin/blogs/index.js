import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/AdminNewBlog/Table'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get, post } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

const tableHead = ['Id', 'Subject', 'API', 'Date', 'Status', 'Top', 'Views', 'Action']

export default function Blogs() {
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

  const getBlogs = () => {
    return get('blogs', params)
  }

  const putBlog = async (data) => {
    return await post(`blogs/${data.id}`, data)
  }

  const deleteBlog = (blogId) => {
    return del(`blogs/${blogId}`)
  }

  const { data, refetch } = useQuery(['admin/blogs', params.per_page, params.page], getBlogs)

  const { mutate } = useMutation(deleteBlog, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Delete failed!',
        type: 'error',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/blogs')
      setSnackbar({
        open: true,
        message: 'Delete success!',
        type: 'success',
      })
    },
  })

  const { mutate: putBlogAPI, isLoading: isPutingBlogAPI } = useMutation(putBlog, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Update failed!',
        type: 'error',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/blogs')
      setSnackbar({
        open: true,
        message: 'Update success!',
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

  const handleResetForm = () => {
    setParams({
      title: '',
      sort: '',
      start: null,
      end: moment().format('YYYY-MM-DD'),
      per_page: 10,
      page: 1,
    })
  }

  const handleCreate = () => {
    router.push('/admin/blogs/add')
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/blogs/add',
      query: { slug: 'about', mode: 'edit', id: id },
    })
  }

  const handleDelete = (id) => {
    mutate(id)
  }

  const handleCheckbox = (data) => {
      const newData = {
        ...data,
        top: +(!data.top),
        _method: 'PUT',
        tags: data.tags.map(item => item.name)
      }
      putBlogAPI(newData)
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
        namePage="/blogs"
        tableHead={tableHead}
        data={data?.data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
        count={data?.total / params.per_page}
        handleCheckbox={handleCheckbox}
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
