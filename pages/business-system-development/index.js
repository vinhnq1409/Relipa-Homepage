import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockWebSystem'
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
        title={'Business Development | Relipa'}
        contentTitle={'this is Business content title'}
        contentImg={'this is Business link img'}
        contentOgUrl={'this is Business content og url '}
        contentKeywords={'this is Business contents key word'}
        contentDescription={'this is Business content description'}
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
