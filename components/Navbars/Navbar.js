import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import AdminNavbarLinks from './AdminNavbarLinks.js'

import styles from 'assets/jss/nextjs-material-dashboard/components/headerStyle.js'

export default function Header(props) {
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  return (
    <>
      <AppBar className={classes.appBar}>
        <Hidden smDown implementation='css' className={classes.demo}>
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation='css'>
          <IconButton color='inherit' aria-label='open drawer' onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </AppBar>
      <Toolbar />
    </>
  )
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
}
