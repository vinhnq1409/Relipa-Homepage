import React from 'react'

import Footer from '../components/Footer/HomeFooter'
import Header from '../components/Header/Header'

export default function Home({ children, ...rest }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
