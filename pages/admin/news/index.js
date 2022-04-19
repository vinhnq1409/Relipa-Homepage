import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import moment from 'moment'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { get, del } from '../../../api/BaseRequest'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import TableList from '../../../components/AdminNewBlog/Table'

const tableHead = ['ID', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 }
]

export default function News() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const [filters, setFilters] = useState({
    title: '',
    sort: ''
  })
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
  const [isSearch, setIsSearch] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: ''
  })

  const getDataNewList = async() => {
    const response = await get('news', { ...filters, ...params })
    return response
  }

  const deleteNewItem = async(id) => {
    const response = await del(`news/${id}`)
    return response.data
  }

  const { data: dataNewList } = useQuery(['getDataNewList', params, isSearch], getDataNewList)
  const {
    mutate: mutateDeleteNew,
    isSuccess,
    isError: isErrorDelete
  } = useMutation(deleteNewItem, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Delete Failed!',
        type: 'error'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('getDataNewList')
      setSnackbar({
        open: true,
        message: 'Delete Success!',
        type: 'success'
      })
    }
  })

  const handleCloseSnackBars = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleSearch = () => {
    setIsSearch(!isSearch)
  }

  const handleResetForm = () => {
    setFilters({
      title: '',
      sort: '',
      start_date: null,
      end_date: moment()
    })
    setIsSearch(!isSearch)
    setParams({
      per_page: 10,
      page: 1
    })
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/news/add',
      query: {
        slug: 'about',
        mode: 'edit',
        id: id
      }
    })
  }

  const handleDelete = (id) => {
    mutateDeleteNew(id)
  }

  const onCreate = () => {
    router.push('/admin/news/add')
  }

  return (
    <>
      <NewFilters
        header={'NEW'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={filters}
        onCreate={onCreate}
        setFilters={setFilters}
      />
      <TableList
        namePage='/news'
        tableHead={tableHead}
        data={dataNewList?.data || data}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
        count={dataNewList?.total / params.per_page}
      />
      {isSuccess && (
        <CustomizedSnackbars
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.type}
          onClose={handleCloseSnackBars}
        />
      )}
      {isErrorDelete && (
        <CustomizedSnackbars
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.type}
          onClose={handleCloseSnackBars}
        />
      )}
    </>
  )
}

News.layout = Admin
