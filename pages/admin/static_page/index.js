import React, { useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
import TableList from '../blogs/TableList'

export default function StaticPage() {
  const trans = useTrans()
  const router = useRouter()
  const headerTable = JSON.parse(headerJson)
  const data = JSON.parse(dataJson)

  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })

  const handleView = (id) => {
    // console.log('View', id)
  }
  const handleUpdate = (id) => {
    // console.log('Update', id)
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'edit' }})
  }
  const handleDelete = (id) => {
    // console.log('Delete', id)
  }

  return (
    <TableList
      tableHead={headerTable}
      data={data}
      params={params}
      setParams={setParams}
      onView = {handleView}
      onUpdate = {handleUpdate}
      onDelete = {handleDelete}
    />
  )
}

StaticPage.layout = Admin
