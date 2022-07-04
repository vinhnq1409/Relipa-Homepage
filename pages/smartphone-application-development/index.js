import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockWebSystem'
import BlockDialog from '../../components/HomePage/Products/BlockDialog'
import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'

const SmartphoneApplicationDevelopment = () => {
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }

  return (
    <>
      <NextSeo
        title="RELIPA GLOBAL | Website and Application Development"
        description="Specializing in providing services such as EC sites, CMS systems, job search websites, and reservation systems, focusing on Javascript / PHP development, we have confidence in web system development and pride to be trusted by many customers."
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
          <BlockBreadcrumb />
          <BlockDesire />
          <BlockWebSystem />
          <CaseStudy itemCard={itemCard} />
          <BlockDialog item={card} />
        </div>
      </HomePage>
    </>
  )
}

export default SmartphoneApplicationDevelopment
