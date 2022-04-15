import React, { useRef, useState } from 'react'
import Admin from 'layouts/Admin.js'
import { get, del } from '../../../api/BaseRequest'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import TableListAdmin from '../../../components/Account/tableAdmin'
import { useRouter } from 'next/router'
import { Dialogs } from '../../../components/Progress/Dialog'
import { Loading } from '../../../components/Progress/Loading'
import CustomizedSnackbars from '../../../components/CustomSnackbar'
import AccountFilter from '../../../components/Account/AdminAccountFilter'

export default function Account() {
  const router = useRouter()
  const userId = useRef()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const tableHead = ['ID', 'Name', 'Email', 'Role', 'Create At', 'Update At', 'Action']
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
    email: '',
    role: ''
  })

  const getRoles = async() => await get(`roles`)

  const getUser = async() => await get(`users`, params)

  const delUsers = async(id) => await del(`users/${id}`)

  const { data: dataUser, refetch } = useQuery([`getUser`, params.per_page, params.page], getUser)

  const { data: dataRoles } = useQuery(`getRoles`, getRoles)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(delUsers, {
    onError: (error) => {
      const { data } = error.response
      setSnackbar({
        open: true,
        message: Object.values(data.errors)[0],
        severity: 'error'
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(`getUser`)
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Delete success'
      })
    }
  })

  const onView = (id) => {}

  const onUpdate = (id) => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'edit', id: id }})
  }

  const onDelete = (id) => {
    setOpen(true)
    userId.current = id
  }

  const handleCreate = () => {
    router.push({ pathname: 'account/add', query: { slug: 'about', mode: 'add' }})
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    setOpen(false)
    mutate(userId.current)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const handleSearch = () => {
    refetch()
  }

  return (
    <>
      <AccountFilter handleSearch={handleSearch} filters={params} setFilters={setParams} onCreate={handleCreate} dataRoles = {dataRoles?.data} />
      <TableListAdmin
        tableHead={tableHead}
        data={dataUser?.data}
        onView={onView}
        onUpdate={onUpdate}
        onDelete={onDelete}
        params={params}
        setParams={setParams}
        count={dataUser?.total / params.per_page}
      />
      <Dialogs
        open={open}
        handleCancel={handleCancel}
        title='Delete'
        content = 'Are you sure you want to delete?'
        onClick={handleDelete}
      />
      <Loading open={loading} />
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  )
}
Account.layout = Admin
