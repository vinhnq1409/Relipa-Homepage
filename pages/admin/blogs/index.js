import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/Table/Table'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../redux/slices/blogSlice'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { del, get } from '../../../api/BaseRequest'
import CustomizedSnackbars from '../../../components/CustomSnackbar'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
// const data1 = [
//   { id: 1, subject: 'subject1', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 2, subject: 'subject2', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 3, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 4, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 5, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 6, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 7, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 8, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 9, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
//   { id: 10, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 }
// ]





export default function Blogs() {
  const [params, setParams] = useState({
    title: '',
    sort: '',
    start: null,
    end: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1
  })

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleClose = () => {
    setOpenSnackbar(false)
  }

  // const getBlogs = async() => {
  //   return await get('blogs', params)
  // }
  const getBlogs = () => {
    return get('blogs')
  }
  const deleteBlog = (blogId) => {
    return del(`blogs/${blogId}`)
  }
  // const { refetch } = useQuery(['admin/blogs', params.per_page, params.page], getBlogs)
  const { data, refetch } = useQuery(['admin/blogs', params.per_page, params.page], getBlogs)
  const queryClient = useQueryClient()
  const { mutate, isSuccess, isError: isErrorDelete, error: errorDelete } = useMutation(deleteBlog, {
    // onMutate: async(blogId) => {
    //   await queryClient.cancelQueries('admin/blogs')
    //   const prevData = queryClient.getQueryData('admin/blogs')
    //   queryClient.setQueriesData('admin/blogs', (oldData) => {
    //     return oldData.filter((blog) => blog.id !== blogId)
    //   })
    //   return prevData
    // },
    onError: (_error, _blog, context) => {
      // queryClient.setQueryData('admin/blogs', context.prevData)
      setOpenSnackbar(true)
    },
    onSettled: () => {
      queryClient.invalidateQueries('admin/blogs')
      setOpenSnackbar(true)
    }
  })

  const handleSearch = () => {
    // console.log(params)
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
  const dispatch = useDispatch()

  const handleCreate = () => {
    router.push('/admin/blogs/add')
  }

  const handleUpdate = (blog) => {
    dispatch(
      addBlog({
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
      pathname: '/admin/blogs/add',
      query: {
        slug: 'about',
        mode: 'edit',
        name: {
          titile: 'a',
          meta: 'b'
        }
      }
    })
  }
  // End code add blogs

  const handleDelete = (id) => {
    // console.log('Delete', id)
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
        data={data}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
      />
      {isSuccess && (
        <CustomizedSnackbars open={openSnackbar} message='Delete success!' severity='success' onClose={handleClose} />
      )}
      {isErrorDelete && (
        <CustomizedSnackbars open={openSnackbar} message={errorDelete.message} severity='error' onClose={handleClose} />
      )}
    </>
  )
}

Blogs.layout = Admin
