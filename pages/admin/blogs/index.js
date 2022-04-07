import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import { Container } from '@material-ui/core'
import TableList from './TableList'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { useRouter } from 'next/router'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
]

export default function Blogs() {
  const [params, setParams] = useState({
    title: '',
    sort: '',
    start: null,
    end: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1,
  })
  
  const handleSearch = () => {
    // console.log(params)
  }
  const handleResetForm = () => {
    setParams({
      ...params,
      title: '',
      sort: '',
      start: null,
      end: moment().format('YYYY-MM-DD'),
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
      query: { slug: 'about', mode: 'edit', name : {
        titile: 'a',
        meta: 'b'
      } }
    })
    
  }
  // End code add blogs

  const handleDelete = (id) => {
    // console.log('Delete', id)
  }

  return (
    <>
      <NewFilters
        header={'NEW'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={params}
        setFilters={setParams}
        onCreate={handleCreate}
      />
      <Container>
        <TableList
          tableHead={tableHead}
          data={data}
          onView={handleView}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          params={params}
          setParams={setParams}
        />
      </Container>
    </>
  )
}

Blogs.layout = Admin
