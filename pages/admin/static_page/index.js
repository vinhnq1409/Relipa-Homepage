import React, { useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import useTrans from '../../../i18n/useTrans'
import TableList from '../blogs/TableList'
<<<<<<< HEAD
import { get } from '../../../api/BaseRequest'
import style from '../../../styles/admin/StaticPage.module.css'

=======
>>>>>>> 9c281f8 (conflix)

export default function StaticPage() {
  const trans = useTrans()
  const router = useRouter()
<<<<<<< HEAD
  const [data, setData] = useState(JSON.parse(dataJson))
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
  
=======
>>>>>>> 9c281f8 (conflix)
  const headerTable = JSON.parse(headerJson)

<<<<<<< HEAD
=======
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })

>>>>>>> 9c281f8 (conflix)
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

<<<<<<< HEAD
  const handleCreate = (id) => {
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'add' }})
  }

  return (
    <>
      <div className= {style.dFlex}>
        <Button onClick={handleCreate} color='primary' variant='contained' className= {style.buttonLeft}>{trans.static_page.createNew}</Button>
      </div>
      <TableList
        tableHead={headerTable}
        data={data}
        params = {params}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
=======
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
>>>>>>> 9c281f8 (conflix)
  )
}

StaticPage.layout = Admin
