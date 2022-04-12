import React from 'react'
import Admin from 'layouts/Admin.js'
import { Button } from '@material-ui/core'
import { dataUJson, headerUJson } from '../../../sampleData/userInfo'
import TableListAdmin from './tableAdmin'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
import style from '../../../styles/admin/StaticPage.module.css'
export default function Account() {
  const trans = useTrans()
  const router = useRouter()
  const dataUse = JSON.parse(dataUJson)
  const tableHead = JSON.parse(headerUJson)

  const changeURL = () => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'add' }})
  }

  return (
    <>
      <div className= {style.dFlex}>
        <Button className= {style.buttonLeft} onClick={changeURL} color = 'primary' variant = 'contained'>{trans.admin_account.create_account}</Button>
      </div>
      <TableListAdmin
        data={dataUse}
        tableHead = {tableHead}
      />
    </>
  )
}
Account.layout = Admin
