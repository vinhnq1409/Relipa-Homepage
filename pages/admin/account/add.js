import Admin from 'layouts/Admin.js'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css'
import { AdminSignUp } from '../../../components/Account/AdminSignUp'
import { AdminEdit } from '../../../components/Account/AdminEdit'

export default function AdminAddAcount() {
  const router = useRouter()
  return (
    <>
      {router.query.mode === 'edit' ? (<AdminEdit />) : (<AdminSignUp />)}

      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

AdminAddAcount.layout = Admin
