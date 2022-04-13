import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import AdminNavbarLinks from './AdminNavbarLinks.js'

import styles from 'assets/jss/nextjs-material-dashboard/components/headerStyle.js'

export default function Header(props) {
  // used for checking current route
  // const router = useRouter()
  // const routerPath = router.pathname.split('/')

  // function convertLink(routerPath) {
  //   let linkRouterArray = []
  //   linkRouterArray = routerPath.map((item) => {
  //     return {
  //       name: item,
  //       link: item
  //     }
  //   })
  //   for (let i = 1; i < linkRouterArray.length; i++) {
  //     linkRouterArray[i].link = linkRouterArray[i - 1].link + '/' + linkRouterArray[i].link
  //   }
  //   linkRouterArray.shift()
  //   if (linkRouterArray.length <= 1) {
  //     return []
  //   } else {
  //     return linkRouterArray
  //   }
  // }
  // const BreadcrumbLink = convertLink(routerPath)

  // create styles for this component
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  // function makeBrand() {
  //   let name = 'Relipa Dashboard'
  //   props.routes.map((prop) => {
  //     if (router.route.indexOf(prop.layout + prop.path) !== -1) {
  //       name = prop.name
  //     }
  //     return null
  //   })
  //   return name
  // }

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Hidden smDown implementation='css'>
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation='css'>
          <IconButton color='inherit' aria-label='open drawer' onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </AppBar>
      {/* <div className={classes.Breadcrumbs}>
        <Typography color='transparent' variant='h6'>
          {makeBrand()}
        </Typography>
        <Breadcrumbs separator='›' maxItems={3} className={classes.Breadcrumbs}>
          {BreadcrumbLink.map((item, index) =>
            index + 1 === BreadcrumbLink.length ? (
              <Typography color='textPrimary'> {item.name}</Typography>
            ) : (
              <Link href={item.link} key={index}>
                <a>{item.name}</a>
              </Link>
            )
          )}
        </Breadcrumbs>
      </div> */}
    </div>
  )
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
}
