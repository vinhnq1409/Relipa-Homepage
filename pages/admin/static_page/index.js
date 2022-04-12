import React, { useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
<<<<<<< HEAD
import TableList from '../blogs/TableList'
import { get } from '../../../api/BaseRequest'
import { Button } from '@material-ui/core'
import style from '../../../styles/admin/StaticPage.module.css'
=======
>>>>>>> 7a4070a (fix dashboard admin)

export default function StaticPage() {
  const trans = useTrans()
  console.log(trans)
  const router = useRouter()
  const data = JSON.parse(dataJson)
  // const [data, setData] = useState('')
  // useEffect(() => {
  //   async function getData() {
  //     setData(await get(`api/v1/static-page`))
  //   }
  //   getData()
  // }, [])
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
        <Button onClick={handleCreate} color='primary' variant='contained' className= {style.buttonLeft}>Create New</Button>
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
