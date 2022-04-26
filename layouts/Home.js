import React, { useEffect } from 'react'
import Footer from '../components/Footer/HomeFooter'
import Header from '../components/Header/Header'
import Head from 'next/head'
import { MainJS } from '../public/user-page/js/main'

export default function Home({ children, ...rest }) {
  useEffect(() => {
    MainJS()
  }, [])
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/user-page/css/line-awesome.min.css' />
        <link rel='stylesheet' href='/user-page/css/aos.css' />
        <link rel='stylesheet' href='/user-page/css/swiper-bundle.min.css' />
        <link rel='stylesheet' href='/user-page/css/template.css' />
      </Head>
      <div id='wrapper'>
        <Header />
        <div>{children}</div>
        <Footer />
        <script src='/user-page/js/popper.min.js' />
        <script src='/user-page/js/bootstrap.js' />

        <script src='/user-page/js/isotope.pkgd.min.js' />
        <script src='/user-page/js/swiper-bundle.min.js' />
        <script src='/user-page/js/aos.js' />

        <script src='/user-page/js/isotop-filter.js' />
      </div>
    </>
  )
}
