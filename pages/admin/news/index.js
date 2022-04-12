import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Admin from 'layouts/Admin.js'
import moment from 'moment'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { Container } from '@material-ui/core'

import TableList from '../../../components/Table/Table'
import { get } from '../../../api/BaseRequest'
import { addNews } from '../../../redux/slices/newsSlice'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 }
]

export default function News() {
  const [filters, setFilters] = useState({
    title: '',
    sort: '',
    start_date: null,
    end_date: moment().format('yyyy/MM/DD')
  })
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
  const [isSearch, setIsSearch] = useState(false)

  const getDataNewList = async () => {
    const response = await get('news', { ...filters, ...params })
    return response
  }

  const dispatch = useDispatch()

  const { data: dataNewList } = useQuery(['getDataNewList', params, isSearch], getDataNewList)

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
    console.log('Delete', id)
  }

  // Start code add blogs
  const router = useRouter()

  const onCreate = () => {
    router.push('/admin/news/add')
  }

  return (
    <div className='new'>
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
        data={dataNewList || data}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
      />
    </div>
  )
}

News.layout = Admin
