import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Hidden from '@material-ui/core/Hidden'
import Poppers from '@material-ui/core/Popper'
import Divider from '@material-ui/core/Divider'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'
import Language from '@material-ui/icons/Language'
// core components
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'
import useWindowSize from 'components/Hooks/useWindowSize.js'
import { logoutApi } from '../../api/reactQueryApi'
import styles from 'assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js'
import { removeCookie, STORAGEKEY } from '../../utils/storage'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormChangePassword from '../changePassword/FormChangePassword'
import stylesModule from '../../styles/admin/signin.module.css'

export default function AdminNavbarLinks() {
  const router = useRouter()
  const changeLang = (lang) => {
    router.push('/', '/', { locale: lang })
  }
  const size = useWindowSize()
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const [openNotification, setOpenNotification] = useState(null)
  const [openProfile, setOpenProfile] = useState(null)
  const [openLanguage, setOpenLanguage] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null)
    } else {
      setOpenNotification(event.currentTarget)
    }
  }
  const handleCloseNotification = () => {
    setOpenNotification(null)
  }
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null)
    } else {
      setOpenProfile(event.currentTarget)
    }
  }
  const handleCloseProfile = () => {
    setOpenProfile(null)
  }
  const handleLogout = () => {
    logoutApi().then(() => {
      removeCookie(STORAGEKEY.ACCESS_TOKEN)
      router.push('/')
    })
  }
  const handleClickLanguage = (event) => {
    if (openLanguage && openLanguage.contains(event.target)) {
      setOpenLanguage(null)
    } else {
      setOpenLanguage(event.currentTarget)
    }
  }
  const handleCloseLanguage = () => {
    setOpenLanguage(null)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.appbar}>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + ' ' + classes.search
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search'
            }
          }}
        />
        <Button color='white' aria-label='edit' justIcon round>
          <Search />
        </Button>
      </div>
      <div>
        <div className={classes.manager}>
          <Button
            color={size.width > 959 ? 'transparent' : 'white'}
            justIcon={size.width > 959}
            simple={!(size.width > 959)}
            aria-label='Language'
            className={classes.buttonLink}
            onClick={handleClickLanguage}
          >
            <Language className={classes.icons} />
            <Hidden mdUp implementation='css'>
              <p onClick={handleCloseLanguage} className={classes.linkText}>
                Language
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={Boolean(openLanguage)}
            anchorEl={openLanguage}
            transition
            disablePortal
            className={classNames({ [classes.popperClose]: !openLanguage }) + ' ' + classes.popperNav}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id='notification-menu-list-grow'
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseLanguage}>
                    <MenuList role='menu'>
                      <MenuItem onClick={() => changeLang('vi')} className={classes.dropdownItem}>
                        VI
                      </MenuItem>
                      <MenuItem onClick={() => changeLang('en')} className={classes.dropdownItem}>
                        EN
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>

        <div className={classes.manager}>
          <Button
            color={size.width > 959 ? 'transparent' : 'white'}
            justIcon={size.width > 959}
            simple={!(size.width > 959)}
            aria-owns={openNotification ? 'notification-menu-list-grow' : null}
            aria-haspopup='true'
            onClick={handleClickNotification}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation='css'>
              <p onClick={handleCloseNotification} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={Boolean(openNotification)}
            anchorEl={openNotification}
            transition
            disablePortal
            className={classNames({ [classes.popperClose]: !openNotification }) + ' ' + classes.popperNav}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id='notification-menu-list-grow'
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseNotification}>
                    <MenuList role='menu'>
                      <MenuItem onClick={handleCloseNotification} className={classes.dropdownItem}>
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem onClick={handleCloseNotification} className={classes.dropdownItem}>
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem onClick={handleCloseNotification} className={classes.dropdownItem}>
                        You{"'"}re now friend with Andrew
                      </MenuItem>
                      <MenuItem onClick={handleCloseNotification} className={classes.dropdownItem}>
                        Another Notification
                      </MenuItem>
                      <MenuItem onClick={handleCloseNotification} className={classes.dropdownItem}>
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <div className={classes.manager}>
          <Button
            color={size.width > 959 ? 'transparent' : 'white'}
            justIcon={size.width > 959}
            simple={!(size.width > 959)}
            aria-owns={openProfile ? 'profile-menu-list-grow' : null}
            aria-haspopup='true'
            onClick={handleClickProfile}
            className={classes.buttonLink}
          >
            <Person className={classes.icons} />
            <Hidden mdUp implementation='css'>
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>
          <Poppers
            open={Boolean(openProfile)}
            anchorEl={openProfile}
            transition
            disablePortal
            className={classNames({ [classes.popperClose]: !openProfile }) + ' ' + classes.popperNav}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id='profile-menu-list-grow'
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseProfile}>
                    <MenuList role='menu'>
                      <MenuItem onClick={handleCloseProfile} className={classes.dropdownItem}>
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handleOpen} className={classes.dropdownItem}>
                        Change password
                      </MenuItem>
                      <MenuItem onClick={handleCloseProfile} className={classes.dropdownItem}>
                        Settings
                      </MenuItem>
                      <Divider light />
                      <MenuItem onClick={handleLogout} className={classes.dropdownItem}>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
      </div>
      <Modal
        className={stylesModule.modal_wrapper}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <FormChangePassword />
        </Fade>
      </Modal>
    </div>
  )
}
