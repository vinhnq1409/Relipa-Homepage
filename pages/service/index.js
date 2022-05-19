import React from 'react'
import BlockBreadcrumb from '../../components/HomePage/Service/AboutService/BlockBreadcrumb'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepsToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'

import HomePage from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'

export default function Index() {
  return (
    <HomePage>
      <HeadHome
        title={'About Service | Relipa'}
        contentTitle={'this is about service content title'}
        contentImg={'this is about service link img'}
        contentOgUrl={'this is about service content og url '}
        contentKeywords={'this is about service contents key word'}
        contentDescription={'this is about service content description'}
      />
      <BlockBanner />
      <div id="main">
        <BlockBreadcrumb />
        <BlockService />
        <BlockWhy />
        <BlockCompare />
        <BlockStepsToUse />
      </div>
    </HomePage>
  )
}
