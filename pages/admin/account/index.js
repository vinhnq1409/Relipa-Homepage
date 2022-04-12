import React, { useEffect, useState } from 'react'
import Admin from 'layouts/Admin.js'
import { Button } from '@material-ui/core'
import { dataUJson, headerUJson } from '../../../sampleData/userInfo'
import {get} from '../../../api/BaseRequest'
import TableListAdmin from './tableAdmin'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
import style from '../../../styles/admin/StaticPage.module.css'
export default function Account() {
  const trans = useTrans()
  const router = useRouter()
  const dataB = JSON.parse(dataUJson)
  const tableHead = JSON.parse(headerUJson)

  const onView = (id) => {}

  const onUpdate = (id) => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'edit' }})
  }

  const onDelete = (id) => {} 

  const changeURL = () => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'add' }})
  }

  return (
    <>
      <div className= {style.dFlex}>
        <Button className= {style.buttonLeft} onClick={changeURL} color = 'primary' variant = 'contained'>{trans.admin_account.create_account}</Button>
      </div>
      <TableListAdmin
        data={dataB}
        tableHead = {tableHead}
        onView = {onView}
        onUpdate = {onUpdate}
        onDelete = {onDelete}
      />
    </>
  )
}
Account.layout = Admin
