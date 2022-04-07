import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'
import { Container } from '@material-ui/core'
import TableList from '../blogs/TableList'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Truc', date: '22/04/2022', status: 'public', views: 666 }
]

export default function News() {
  const [filters, setFilters] = useState({
    subject: '',
    sortBy: '',
    startDay: null,
    endDay: moment()
  })
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })

  const handleSearch = () => {}

  const handleResetForm = () => {
    setFilters({
      subject: '',
      sortBy: '',
      startDay: null,
      endDay: moment()
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
    <div className='new'>
      <NewFilters
        header={'NEW'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters={filters}
        setFilters={setFilters}
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
    </div>
  )
}

News.layout = Admin
