import React from 'react'
import Admin from 'layouts/Admin.js'
import NewFilters from '../../../components/New/NewFilters'

export default function News() {
  return (
    <div className='new'>
      <NewFilters header={'NEW'} />
    </div>
  )
}

News.layout = Admin
