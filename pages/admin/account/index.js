import React from 'react'
import Admin from 'layouts/Admin.js'
import { Button } from '@material-ui/core'
import { headerUJson } from '../../../sampleData/userInfo'
import { get, del } from '../../../api/BaseRequest'
import { useQuery, useMutation } from 'react-query'
import TableListAdmin from './tableAdmin'
import useTrans from '../../../i18n/useTrans'
import style from '../../../styles/admin/StaticPage.module.css'
import { useRouter } from 'next/router'

export default function Account() {
  const trans = useTrans()
  const router = useRouter()
  const tableHead = JSON.parse(headerUJson)

  const getUser = async() => await get(`users`)

  const { data: dataUser, isLoading: isGetingUserAPI, status } = useQuery(`getUser`, getUser, {
    initialData: { data: [] }
  })

  const delUsers = async(id) => {
    return await del(`users/${id}`)
  }

  const { mutate: delUsersAPI, isLoading: isDeltingUserAPI } = useMutation(delUsers)

  const onView = (id) => {}

  const onUpdate = (id) => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'edit', id: id }})
  }

  const onDelete = (id) => {
    delUsersAPI(id)
  }

  const changeURL = () => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'add' }})
  }

  return (
    <>
      <div className={style.dFlex}>
        <Button className={style.buttonLeft} onClick={changeURL} color='primary' variant='contained'>
          {trans.admin_account.create_account}
        </Button>
      </div>
      <TableListAdmin data={dataUser?.data} tableHead={tableHead} onView={onView} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  )
}
Account.layout = Admin
