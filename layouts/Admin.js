import React, { useEffect, useState, createRef } from 'react'
import { useRouter } from 'next/router'
// creates a beautiful scrollbar
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import dashboardRoutes from '../routes'
import { fiterRoleUser } from '../utils/roles'
import Head from 'next/head'
import HeadHome from '../components/Head/Head'

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
  const { infoUser, loading } = useSelector((state) => state.userInfo)
  const roleUser = !loading && Object.keys(infoUser).length !== 0 ? fiterRoleUser(infoUser?.roles) : ''

  if (token) {
    const currentTime = Date.now() / 1000
    const decoded = jwt_decode(token)
    if (currentTime > decoded.exp) removeCookie(STORAGEKEY.ACCESS_TOKEN)
    setAuthHeader(token)
  }

  useEffect(() => {
    if (!token) {
      router.push('/admin/signin')
    }
  })

  useEffect(() => {
    if (token) {
      dispatch(getInfoUser())
    }
  }, [token])

  useEffect(() => {
    if (Object.keys(infoUser).length !== 0) {
      const routerUser = dashboardRoutes.filter((router) => {
        return router?.role.includes(roleUser)
      })

      const isUseRouter = routerUser.some((item) => {
        return `${item?.layout}${item?.path}`.includes(router.asPath)
      })

      if (!isUseRouter) {
        router.push(router.pathname)
      }
    }
  }, [infoUser])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <HeadHome
        title={'Relipa Homepage | Content Management'}
        contentTitle={'this is  Content Management content title'}
        contentImg={'this is  Content Management link img'}
        contentOgUrl={'this is  Content Management content og url '}
        contentKeywords={'this is  Content Management contents key word'}
        contentDescription={'this is  Content Management content description'}
      />
      <Head>
        <link rel="stylesheet" href="/admin/css/nextjs-material-dashboard.css" />
      </Head>
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={'Relipa CMS'}
          logo={logo}
          image={bgImage}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color="white"
          {...rest}
        />
        <div className={classes.mainPanel} ref={mainPanel}>
          <Navbar handleDrawerToggle={handleDrawerToggle} {...rest} />
          <div className={classes.body}>
            <Breadcrumb routes={routes} />
            <Paper elevation={0} variant="outlined" className={classes.content}>
              <div className={classes.container}>{children}</div>
            </Paper>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
