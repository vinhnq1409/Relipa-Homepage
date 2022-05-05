import React, { useState } from 'react'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/Contact/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Contact/BlockBreadcrumb'
import BlockForm from '../../components/HomePage/Contact/BlockForm'
import HomePage from '../../layouts/Home'
import CustomizedSnackbars from '../../components/CustomSnackbar'

export default function Contact() {
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success'
  })
  const onNotification = (isNotification) => {
    isNotification
      ? setSnackbar({
          ...snackbar,
          open: true,
          message: 'Send is successful'
        })
      : setSnackbar({
          open: true,
          severity: 'error',
          message: 'Send is failed'
        })
  }
  return (
    <div>
      <HeadHome
        title={'this is Contact'}
        contentTitle={'this is Contact content title'}
        contentImg={'this is Contact link img'}
        contentOgUrl={'this is Contact content og url '}
        contentKeywords={'this is Contact contents key word'}
        contentDescription={'this is Contact content description'}
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <BlockForm onNotification={onNotification} />
        </div>
      </HomePage>
      <CustomizedSnackbars
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </div>
  )
}
