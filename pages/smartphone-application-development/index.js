import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/BlockWhyChoose'

import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'

import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'

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
        <BlockDesire />
        <BlockWebSystem />
        <BlockWhyChoose />
        <CaseStudy itemCard={itemCard} />
        <BlockDialog item={card} />
      </div>
    </HomePage>
  )
}
