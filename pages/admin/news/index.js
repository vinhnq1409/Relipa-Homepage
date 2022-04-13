import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Admin from 'layouts/Admin.js'
import moment from 'moment'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
<<<<<<< HEAD
import TableList from '../../../components/AdminNewBlog/Table'
import { get , del } from '../../../api/BaseRequest'
=======
import TableList from '../../../components/Table/Table'
import { get, del } from '../../../api/BaseRequest'
>>>>>>> d7776f6 (remove lib don't use, style dashboard)
import { addNews } from '../../../redux/slices/newsSlice'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import Paper from '@material-ui/core/Paper'
import styles from '../../../styles/AdminNew.module.css'

const tableHead = ['ID', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 }
]

export default function News() {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const [filters, setFilters] = useState({
    title: '',
    sort: ''
    // start_date: null,
    // end_date: moment().format('yyyy/MM/DD')
  })
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
  const [isSearch, setIsSearch] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState({open: false, message: ''})

  const getDataNewList = async() => {
    const response = await get('news', { ...filters, ...params })
    return response
  }

  const deleteNewItem = async(id) => {
    const response = await del(`news/${id}`)
    return response.data
  }

  const { data: dataNewList } = useQuery(['getDataNewList', params, isSearch], getDataNewList)
<<<<<<< HEAD
  const { mutate: mutateDeleteNew, isSuccess, isError: isErrorDelete, error: errorDelete} = useMutation(deleteNewItem, { 
    onError: (error) => {
      setOpenSnackbar({
        open: true,
        message: 'Delete Failed!'
      })
=======
  const {
    mutate: mutateDeleteNew,
    isSuccess,
    isError: isErrorDelete,
    error: errorDelete
  } = useMutation(deleteNewItem, {
    retry: 3,
    onError: (_error, _blog) => {
      setOpenSnackbar(true)
>>>>>>> d7776f6 (remove lib don't use, style dashboard)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('getDataNewList')
      setOpenSnackbar({
        open: true,
        message: 'Delete Success!'
      })
    }
  })

  const handleCloseSnackBars = () => {
    setOpenSnackbar(false)
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

  // --action--
  const handleView = (id) => {
    // console.log('View', id)
  }

  const handleUpdate = (blog) => {
    dispatch(
      addNews({
        id: 1,
        title: 'A nice article',
        desc: 'This is blog description',
        meta: 'This is blog meta',
        urlImageMeta: 'This is url image meta',
        content: 'This is blog content',
        tags: 'This is blog content',
        friendlyUrl: 'This is blog url friendly'
      })
    )
    router.push({
      pathname: '/admin/news/add',
      query: {
        slug: 'about',
        mode: 'edit',
        id: '2'
      }
    })
  }

  const handleDelete = (id) => {
    // console.log('Delete', id)
    mutateDeleteNew(id)
  }

  // Start code add blogs
  const router = useRouter()

  const onCreate = () => {
    router.push('/admin/news/add')
  }

  return (
    <div className={styles.new}>
      <NewFilters
        header={'NEW'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={filters}
        onCreate={onCreate}
        setFilters={setFilters}
      />
      <TableList
        tableHead={tableHead}
        data={dataNewList?.data || data}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
        count={dataNewList?.total / params.per_page}
      />
      {isSuccess && (
        <CustomizedSnackbars
          open={openSnackbar}
          message='Delete success!'
          severity='success'
          onClose={handleCloseSnackBars}
        />
      )}
      {isErrorDelete && (
<<<<<<< HEAD
        <CustomizedSnackbars open={openSnackbar} message={openSnackbar.message} severity='error' onClose={handleCloseSnackBars} />
=======
        <CustomizedSnackbars
          open={openSnackbar}
          message={errorDelete.message}
          severity='error'
          onClose={handleCloseSnackBars}
        />
>>>>>>> d7776f6 (remove lib don't use, style dashboard)
      )}
    </div>
  )
}

News.layout = Admin
