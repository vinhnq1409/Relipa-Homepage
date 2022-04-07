import React from 'react'
import Admin from 'layouts/Admin.js'
import NewFilters from '../../../components/AdminNewBlog/NewBlogFilters'

export default function News() {
  const handleSearch = (subject, sortBy, startDay, endDay) => {}

  return (
    <div className='new'>
      <NewFilters header={'NEW'} handleSearch={handleSearch} />
    </div>
  )
}

News.layout = Admin
