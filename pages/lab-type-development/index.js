import React from 'react'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import BlockBanner from '../../components/HomePage/Service/LabtypeDevelopment/BlockBanner'
import BlockCaseStudies from '../../components/HomePage/Service/LabtypeDevelopment/BlockCaseStudies'
import BlockContent from '../../components/HomePage/Service/LabtypeDevelopment/BlockContent'
import BlockOverview from '../../components/HomePage/Service/LabtypeDevelopment/BlockOverview'
import BlockWhy from '../../components/HomePage/Service/LabtypeDevelopment/BlockWhy'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <BlockContent />
        <BlockOverview />
        <BlockWhy />
        <BlockCaseStudies />
      </div>
    </HomePage>
  )
}
