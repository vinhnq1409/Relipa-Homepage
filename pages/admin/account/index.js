import React from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../blogs/TableList'
import { dataUJson, headerUJson } from '../../../sampleData/userInfo'

export default function Account() {
  const dataUse = JSON.parse(dataUJson)
  const tableHead = JSON.parse(headerUJson)
  return (
    <>
      <TableList
        data={dataUse}
        tableHead = {tableHead}
      />
    </>
  )
}
Account.layout = Admin
