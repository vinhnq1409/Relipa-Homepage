import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import TableList from '../../../components/Tags/TableList'

const tableHead = ['Id', 'Name', 'is Trend', 'Date', 'Action']

export default function Tags() {
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

  const getTags = () => {
    return get('tags', params)
  }

  const deleteTag = (blogId) => {
    return del(`tags/${blogId}`)
  }

  const { data, refetch } = useQuery(['admin/tags', params.per_page, params.page], getTags)
  const { mutate } = useMutation(deleteTag, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Delete failed!',
        type: 'error'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('admin/tags')
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

  const handleCreate = () => {
    router.push('/admin/tags/add')
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/tags/add',
      query: { slug: 'about', mode: 'edit', id: id }
    })
  }

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
        namePage='/tags'
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

Tags.layout = Admin
