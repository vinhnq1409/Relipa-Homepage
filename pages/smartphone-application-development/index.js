import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/BlockWhyChoose'

import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'

import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'
import HeadHome from '../../components/Head/Head'

export default function Index() {
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }
  return (
    <HomePage>
      <HeadHome
        title={'Smartphone Application Development | Relipa'}
        contentTitle={'this is blockchain content title'}
        contentImg={'this is blockchain link img'}
        contentOgUrl={'this is blockchain content og url '}
        contentKeywords={'this is blockchain contents key word'}
        contentDescription={'this is blockchain content description'}
      />
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
