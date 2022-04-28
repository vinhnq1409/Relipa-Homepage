import React from 'react'
import BlockBanner from '../../components/HomePage/Service/LabtypeDevelopment/BlockBanner'
import BlockCaseStudies from '../../components/HomePage/Service/LabtypeDevelopment/BlockCaseStudies'
import BlockContent from '../../components/HomePage/Service/LabtypeDevelopment/BlockContent'
import BlockFontBanner from '../../components/HomePage/Service/LabtypeDevelopment/BlockFontBanner'
import BlockOverview from '../../components/HomePage/Service/LabtypeDevelopment/BlockOverview'
import BlockWhy from '../../components/HomePage/Service/LabtypeDevelopment/BlockWhy'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockFontBanner />
      <div id='main'>
        <BlockBanner />
        <BlockContent />
        <BlockOverview />
        <BlockWhy />
        <BlockCaseStudies />
      </div>
    </HomePage>
  )
}
