import React, { useState } from 'react'

import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'
import BlockBanner from '../../components/HomePage/Service/LabtypeDevelopment/BlockBanner'
import BlockContent from '../../components/HomePage/Service/LabtypeDevelopment/BlockContent'
import BlockOverview from '../../components/HomePage/Service/LabtypeDevelopment/BlockOverview'
import BlockWhy from '../../components/HomePage/Service/LabtypeDevelopment/BlockWhy'

import HomePage from '../../layouts/Home'

export default function Index() {
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }
  return (
    <HomePage>
      <BlockBanner />
      <div id="main">
        <BlockBreadcrumb />
        <BlockContent />
        <BlockOverview />
        <BlockWhy />
        <CaseStudy itemCard={itemCard} />
        <BlockDialog item={card} />
      </div>
    </HomePage>
  )
}
