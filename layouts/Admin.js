import React, { useEffect, useState, createRef } from 'react'
import { useRouter } from 'next/router'
// creates a beautiful scrollbar
import { makeStyles } from '@material-ui/core/styles'
// core components
import Navbar from 'components/Navbars/Navbar.js'
import Footer from 'components/Footer/Footer.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import routes from 'routes.js'
import styles from 'assets/jss/nextjs-material-dashboard/layouts/adminStyle.js'
import bgImage from 'assets/img/sidebar-4.jpg'
import { getCookie, removeCookie, STORAGEKEY } from '../utils/storage/index'
import { setAuthHeader } from '../api/BaseRequest'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoUser } from '../redux/slices/userInfo'
import logo from 'assets/img/relipa-logo.png'
import SignIn from '../pages/admin/signin'
import dashboardRoutes from '../routes'
import { fiterRoleUser } from '../utils/roles'

export default function Admin({ children, ...rest }) {
  // used for checking current route
  const router = useRouter()
  // styles
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef()
  const [mobileOpen, setMobileOpen] = useState(false)
  const token = getCookie(STORAGEKEY.ACCESS_TOKEN)
  const dispatch = useDispatch()
  const { infoUser } = useSelector((state) => state.userInfo)
  const [roleUser] = useState(infoUser !== {} ? fiterRoleUser(infoUser?.roles) : '')

  if (token) {
    const currentTime = Date.now() / 1000
    const decoded = jwt_decode(token)
    if (currentTime > decoded.exp) removeCookie(STORAGEKEY.ACCESS_TOKEN)
    setAuthHeader(token)
  }

  useEffect(() => {
    if (token) dispatch(getInfoUser())
  }, [token])

  useEffect(() => {
    const routerUser = dashboardRoutes.filter((router) => {
      return router?.role.includes(roleUser)
    })

    const isUseRouter = routerUser.some((item) => {
      return `${item?.layout}${item?.path}`.includes(router.asPath)
    })

    if (!isUseRouter) {
      router.push('/admin')
    }
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      {token ? (
        <div className={classes.wrapper}>
          <Sidebar
            routes={routes}
            logoText={'Relipa Admin'}
            logo={logo}
            image={bgImage}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color='white'
            {...rest}
          />
          <div className={classes.mainPanel} ref={mainPanel}>
            <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} {...rest} />
            <div className={classes.content}>
              <div className={classes.container}>{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  )
}
