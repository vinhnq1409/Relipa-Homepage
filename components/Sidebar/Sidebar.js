/*eslint-disable*/
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
// core components
import AdminNavbarLinks from 'components/Navbars/AdminNavbarLinks.js'
import styles from 'assets/jss/nextjs-material-dashboard/components/sidebarStyle.js'
import { fiterRoleUser } from '../../utils/roles'
import { useSelector } from 'react-redux'

export default function Sidebar(props) {
  //role
  const { infoUser, loading } = useSelector((state) => state.userInfo)
  const roleUser = !loading && Object.keys(infoUser).length !== 0 ? fiterRoleUser(infoUser?.roles) : ''
  // used for checking current route
  const router = useRouter()
  // creates styles for this component
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return router.route === routeName
  }
  const { color, logo, image, logoText, routes } = props
  const routerRole = routes.filter((route) => {
    return route?.role.includes(roleUser)
  })
  const links = (
    <List className={classes.list}>
      {routerRole.map((prop, key) => {
        let listItemClasses
        listItemClasses = classNames({
          [' ' + classes[color]]: activeRoute(prop.layout + prop.path)
        })
        const whiteFontClasses = classNames({
          [' ' + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        })
        return (
          <Link href={prop.layout + prop.path} key={key}>
            <a className={classes.item}>
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === 'string' ? (
                  <Icon className={classNames(classes.itemIcon, whiteFontClasses)}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
            </a>
          </Link>
        )
      })}
    </List>
  )
  const brand = (
    <div className={classes.logo}>
      <Link href='/admin'>
        <a className={classNames(classes.logoLink)}>
          <div className={classes.logoImage}>
            <img src={logo} alt='logo' className={classes.img} />
          </div>
          {logoText}
        </a>
      </Link>
    </div>
  )
  return (
    <div>
      <Hidden mdUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={'right'}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {<AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          anchor={'left'}
          variant='permanent'
          open
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  )
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(['white', 'purple', 'blue', 'green', 'orange', 'red']),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
}
