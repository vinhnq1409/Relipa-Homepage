import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css'
import { AdminSignUp } from '../../../components/Account/AdminSignUp'
import { AdminEdit } from '../../../components/Account/AdminEdit'

export default function AdminAddAcount() {
  const router = useRouter()

  return (
    <>
      {router.query.mode === 'edit' ? <AdminEdit /> : <AdminSignUp />}
    </>
  )
}

AdminAddAcount.layout = Admin
