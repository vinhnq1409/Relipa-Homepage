import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
<<<<<<< HEAD
import { Container } from '@material-ui/core'
import TableList from './TableList'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 }
]

export default function Blogs() {
  const [params, setParams] = useState({
    title: '',
    sort: '',
    start: null,
    end: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1
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
      end: moment().format('YYYY-MM-DD')
    })
  }

  // --action--
  const handleView = (id) => {
    // console.log('View', id)
  }
  const handleUpdate = (id) => {
    // console.log('Update', id)
  }
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
=======
import { Button } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Blogs() {
  const router = useRouter()
  const onClick = () => {
    router.push({
        pathname: '/admin/blogs/add',
        query: { slug: 'about', mode: 'edit' }
    })
  }
  return (
    <div>
      <Link href='/admin/blogs/add'>
        <Button>Create</Button>
      </Link>      
      <Link href={{
        pathname: '/admin/blogs/add',
        query: { slug: 'about', mode: 'edit' }
      }}>
        <Button>Edit</Button>
      </Link>
      <Button onClick={onClick}>
        Edit
      </Button>
    </div>
>>>>>>> 804019e (reset url, router link)
  )
}

Blogs.layout = Admin
