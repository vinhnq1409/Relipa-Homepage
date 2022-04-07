import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'
import moment from 'moment'

export default function News() {
  const [filters, setFilters] = useState({
    subject: '',
    sortBy: '',
    startDay: null,
    endDay: moment()
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

  return (
    <div className='new'>
      <NewFilters
        header={'NEW'}
        handleSearch={handleSearch}
        handleResetForm={handleResetForm}
        filters = {filters}
        setFilters = {setFilters}
      />
    </div>
  )
}

News.layout = Admin
