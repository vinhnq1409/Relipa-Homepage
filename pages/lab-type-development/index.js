import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockDialog from '../../components/HomePage/Products/BlockDialog'
import BlockBreadcrumb from '../../components/HomePage/Service/LabtypeDevelopment/BlockBreadcrumb'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'
import BlockWhyChoose from '../../components/HomePage/Service/BlockWhyChoose'
import BlockBanner from '../../components/HomePage/Service/LabtypeDevelopment/BlockBanner'
import BlockContent from '../../components/HomePage/Service/LabtypeDevelopment/BlockContent'
import BlockOverview from '../../components/HomePage/Service/LabtypeDevelopment/BlockOverview'
import HomePage from '../../layouts/Home'

const LabtypeDevelopment = () => {
  const [card, setCard] = useState({})

  const itemCard = (value) => {
    setCard(value)
  }

  return (
    <>
      <NextSeo
        title="RELIPA GLOBAL | Lab-type Development"
        description="Optimal Cost - High Quality - By a dedicated development team, your requirements will be satisfied fast and exceptionally with flexible contract types, your resources will be under long-term high security, so let the project be developed by us!"
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
          <BlockBreadcrumb />
          <BlockContent />
          <BlockOverview />
          <BlockWhyChoose />
          <CaseStudy itemCard={itemCard} />
          <BlockDialog item={card} />
        </div>
      </HomePage>
    </>
  )
}

export default LabtypeDevelopment
