import React from 'react'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockFontBanner from '../../components/HomePage/Service/AboutService/BlockFontBanner'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockFontBanner />
      <div id='main'>
        <BlockBanner />
        <BlockService />
        <BlockWhy />
        <BlockCompare />
        <BlockStepToUse />
      </div>
    </HomePage>
  )
}
