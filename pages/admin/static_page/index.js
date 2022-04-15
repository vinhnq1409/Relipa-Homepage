import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import TableList from '../../../components/AdminNewBlog/Table'
import { del, get } from '../../../api/BaseRequest'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import { Loading } from '../../../components/Progress/Loading'

export default function StaticPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState({
    per_page: 10,
    page: 1,
    title: ''
  })
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })

  const tableHead = ['No', 'Title', 'Author', 'Date', 'Status', 'Views', 'Action']

  const getStaticPage = async() => await get(`static-page`)

  const delStaticPage = async(id) => await del(`static-page/${id}`)

  const { data, refetch } = useQuery([`getStaticPage`, params.per_page, params.page], getStaticPage)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(delStaticPage, {
    onError: (error) => {
      const { data } = error.response
      setSnackbar({
        open: true,
        message: Object.values(data.errors)[0],
        severity: 'error'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(`getStaticPage`)
      setSnackbar({
        severity: 'error',
        open: true,
        message: 'Delete success'
      })
    }
  })

  const handleView = (id) => {}

  const handleUpdate = (id) => {
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'edit' }})
  }

  const handleDelete = (id) => {
    mutate(id)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const handleCreate = (id) => {
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'add' }})
  }

  const handleSearch = () => {
    refetch()
  }

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <>
      <NewFilters handleSearch={handleSearch} filters={params} setFilters={setParams} onCreate={handleCreate} />
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
      <Loading open={loading} />
    </>
  )
}

StaticPage.layout = Admin
