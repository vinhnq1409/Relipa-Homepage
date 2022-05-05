import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Footer from '../components/Footer/HomeFooter'
import Header from '../components/Header/Header'
import { MainJS } from '../public/user-page/js/main'
import LoadingPages from '../components/HomePage/LoadingPage/LoadingPage'

export default function Home({ children, ...rest }) {
  const { route } = useRouter()

  useEffect(() => {
    MainJS()

    if (route !== '/') {
      document.body.classList.remove('header-over-content')
    } else {
      document.body.classList.add('header-over-content')
    }
  }, [])

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/user-page/css/line-awesome.min.css' />
        <link rel='stylesheet' href='/user-page/css/aos.css' />
        <link rel='stylesheet' href='/user-page/css/swiper-bundle.min.css' />
        <link rel='stylesheet' href='/user-page/css/template.css' />
      </Head>
      <LoadingPages />
      <div id='wrapper'>
        <Header />
        <div>{children}</div>
        <Footer />
        <Script src='/user-page/js/popper.min.js' strategy="beforeInteractive"/>
        <Script src='/user-page/js/bootstrap.js' strategy="beforeInteractive"/>

        <Script src='/user-page/js/isotope.pkgd.min.js' strategy="beforeInteractive"/>
        <Script src='/user-page/js/swiper-bundle.min.js' strategy="beforeInteractive"/>
        <Script src='/user-page/js/aos.js' strategy="beforeInteractive"/>

        <Script src='/user-page/js/isotop-filter.js' strategy="beforeInteractive"/>
      </div>
    </>
  )
}
