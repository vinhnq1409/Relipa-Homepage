import React from 'react'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'

import HomePage from '../../layouts/Home'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import HeadHome from '../../components/Head/Head'

export default function Index() {
  return (
    <HomePage>
      <HeadHome
        title={'About Service | Relipa'}
        contentTitle={'this is blockchain content title'}
        contentImg={'this is blockchain link img'}
        contentOgUrl={'this is blockchain content og url '}
        contentKeywords={'this is blockchain contents key word'}
        contentDescription={'this is blockchain content description'}
      />
      <BlockBanner />
      <div id="main">
        <BlockBreadcrumb />
        <BlockService />
        <BlockWhy />
        <BlockCompare />
        <BlockStepToUse />
      </div>
    </HomePage>
  )
}
