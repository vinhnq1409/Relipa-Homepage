import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
<<<<<<< HEAD
=======
// import { useRouter } from 'next/router'

import Container from '@material-ui/core/Container'
import TableList from './TableList'
import moment from 'moment'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 }
]
>>>>>>> 3c5155b (layout-blogs)

export default function Blogs() {
<<<<<<< HEAD
=======
  const [params, setParams] = useState({
    title: '',
    sort: 'asc',
    start_date: null,
    end_date: moment().format('YYYY-MM-DD'),
    per_page: 10,
    page: 1
  })

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

>>>>>>> 2fbf0f4 (table-layout)
  return (
<<<<<<< HEAD
    <div>
      Blogs
    </div>
=======
    <Container>
      <TableList
        data={data}
        tableHead={tableHead}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        params={params}
        setParams={setParams}
      />
    </Container>
>>>>>>> 3c5155b (layout-blogs)
  )
}

Blogs.layout = Admin
