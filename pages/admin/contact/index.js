import React, { useState } from 'react'
import Admin from 'layouts/Admin.js'
import TableList from '../../../components/Contact/Table'
import { useQuery } from 'react-query'
import {  get } from '../../../api/BaseRequest'

const tableHead = ['Id', 'Infomation', 'Inquiry Type','How to know', 'Content', 'Created At']

export default function Blogs() {
  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })

  const getContacts = () => {
    return get('list-contact', params)
  }

  const { data } = useQuery(['admin/contacts', params.per_page, params.page], getContacts)

  return (
    <>
      <TableList
        namePage='/blogs'
        tableHead={tableHead}
        data={data?.data}
        params={params}
        setParams={setParams}
        count={data?.total / params.per_page}
      />
    </>
  )
}

Blogs.layout = Admin
