import React from 'react'
import Home from '../../layouts/Home'
import Head from 'next/head'

export default function CompanyProfile() {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      Company Profile
    </div>
  )
}

CompanyProfile.layout = Home
