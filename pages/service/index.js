import React from 'react'
import BlockBreadcrumb from '../../components/HomePage/Service/AboutService/BlockBreadcrumb'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepsToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <BlockService />
        <BlockWhy />
        <BlockCompare />
        <BlockStepsToUse />
      </div>
    </HomePage>
  )
}
