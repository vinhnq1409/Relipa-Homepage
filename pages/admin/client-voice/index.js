import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import moment from 'moment'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { get, del } from '../../../api/BaseRequest'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import TableList from '../../../components/ClientVoice/Table'

const tableHead = ['ID', 'Title', 'Company', 'Description', 'Action']

export default function News() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const [filters, setFilters] = useState({
    title: '',
    sort: '',
  })
  const [params, setParams] = useState({
    per_page: 10,
    page: 1,
  })
  const [isSearch, setIsSearch] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    type: '',
  })

  const getDataNewList = async() => {
    const response = await get('voice', { ...filters, ...params })
    return response
  }

  const deleteNewItem = async(id) => {
    const response = await del(`voice/${id}`)
    return response.data
  }

  const { data: dataNewList } = useQuery(['getDataCaseStudies', params, isSearch], getDataNewList)
  const {
    mutate: mutateDeleteNew,
    isSuccess,
    isError: isErrorDelete,
  } = useMutation(deleteNewItem, {
    onError: () => {
      setSnackbar({
        open: true,
        message: 'Delete Failed!',
        type: 'error',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('getDataCaseStudies')
      setSnackbar({
        open: true,
        message: 'Delete Success!',
        type: 'success',
      })
    },
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
      end_date: moment(),
    })
    setIsSearch(!isSearch)
    setParams({
      per_page: 10,
      page: 1,
    })
  }

  const handleUpdate = (id) => {
    router.push({
      pathname: '/admin/client-voice/add',
      query: {
        slug: 'about',
        mode: 'edit',
        id: id,
      },
    })
  }

  const handleDelete = (id) => {
    mutateDeleteNew(id)
  }

  const onCreate = () => {
    router.push('/admin/client-voice/add')
  }

  return (
    <>
      <NewFilters
        header={'CLIENT VOICE'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={filters}
        onCreate={onCreate}
        setFilters={setFilters}
      />
      <TableList
        namePage="/client-voice"
        tableHead={tableHead}
        data={dataNewList?.data || []}
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
