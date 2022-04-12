import React from 'react'
import Admin from 'layouts/Admin.js'
<<<<<<< HEAD
import { Button } from '@material-ui/core'
import { dataUJson, headerUJson } from '../../../sampleData/userInfo'
import TableListAdmin from './tableAdmin'
import { useRouter } from 'next/router'
import style from '../../../styles/admin/StaticPage.module.css'
export default function Account() {
  const router = useRouter()
  const dataUse = JSON.parse(dataUJson)
  const tableHead = JSON.parse(headerUJson)

  const changeURL = () => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'add' }})
  }
  return (
    <>
      <div className= {style.dFlex}>
        <Button className= {style.buttonLeft} onClick={changeURL} color = 'primary' variant = 'contained'>Create Account</Button>
      </div>
      <TableListAdmin
=======
import TableList from '../blogs/TableList'
import { dataUJson, headerUJson } from '../../../sampleData/userInfo'

export default function Account() {
  const dataUse = JSON.parse(dataUJson)
  const tableHead = JSON.parse(headerUJson)
  return (
    <>
      <TableList
>>>>>>> 73757c3 (test version)
        data={dataUse}
        tableHead = {tableHead}
      />
    </>
  )
}
Account.layout = Admin
