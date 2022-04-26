import React from 'react'
import BlockBreadcrumb from '../components/HomePage/Company/BlockBreadcrumb'
import BlockBanner from '../components/HomePage/Home/BlockBanner'
import BlockService from '../components/HomePage/Home/BlockService'
import HomePage from '../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockService />
      </div>
    </HomePage>
  )
}
