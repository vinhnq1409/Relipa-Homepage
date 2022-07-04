import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Contact/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Contact/BlockBreadcrumb'
import BlockForm from '../../components/HomePage/Contact/BlockForm'
import HomePage from '../../layouts/Home'
import CustomizedSnackbars from '../../components/CustomSnackbar'

const Contact = () => {
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
    severity: 'success',
  })

  const onNotification = (isNotification) => {
    isNotification
      ? setSnackbar({
        ...snackbar,
        open: true,
        message: 'Thank you for contacting us.',
      })
      : setSnackbar({
        open: true,
        severity: 'error',
        message: 'Sending failed.',
      })
  }

  return (
    <>
      <NextSeo
        title="Blockchain and Software Development | Contact RELIPA"
        description="Please feel free to contact us via the contact form. It may take some days to reply depend on your detailed requirements."
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
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
    </>
  )
}

export default Contact
