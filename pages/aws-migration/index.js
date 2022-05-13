import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Service/AwsMigration/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/AwsMigration/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/AwsMigration/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/AwsMigration/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/AwsMigration/BlockWhyChoose'
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
