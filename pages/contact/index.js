import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Contact/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Contact/BlockBreadcrumb'
import BlockForm from '../../components/HomePage/Contact/BlockForm'
import HomePage from '../../layouts/Home'
import CustomizedSnackbars from '../../components/CustomSnackbar'

export default function Contact() {
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
          message: 'Send is successful',
        })
      : setSnackbar({
          open: true,
          severity: 'error',
          message: 'Send is failed',
        })
  }
  return (
    <>
      <NextSeo
        title="Contact | Relipa"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
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
