import React, { useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Link from 'next/link'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import useTrans from '../../../i18n/useTrans'
import TableList from '../blogs/TableList'
import { get } from '../../../api/BaseRequest'
import style from '../../../styles/admin/StaticPage.module.css'


export default function StaticPage() {
  const trans = useTrans()
  console.log(trans)
  const router = useRouter()
  const [data, setData] = useState(JSON.parse(dataJson))
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
  
  const headerTable = JSON.parse(headerJson)

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
  )
}

StaticPage.layout = Admin
