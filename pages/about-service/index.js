import React from 'react'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'

import HomePage from '../../layouts/Home'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <BlockService />
        <BlockWhy />
        <BlockCompare />
        <BlockStepToUse />
      </div>
    </HomePage>
  )
}
