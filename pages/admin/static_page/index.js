import React, { useEffect, useState } from 'react'
import { headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import useTrans from '../../../i18n/useTrans'
import TableList from '../blogs/TableList'
import { get } from '../../../api/BaseRequest'
import style from '../../../style/admin/StaticPage.module.css'

export default function StaticPage() {
  const trans = useTrans()
  const router = useRouter()
  const [data, setData] = useState('')
  useEffect(() => {
    async function getData() {
      setData(await get(`api/v1/static-page`))
    }
    getData()
  }, [])
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
  return (
    <>
      <div className= {style.dFlex}>
        <Button onClick={handleCreate} color='primary' variant='contained' className= {style.buttonLeft}>{trans.static_page.createNew}</Button>
      </div>
      <TableList
        tableHead={headerTable}
        data={data}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  )
}

StaticPage.layout = Admin
