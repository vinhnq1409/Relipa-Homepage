import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Service/BlockchainDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/BlockchainDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/BlockchainDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/BlockchainDevelopment/BlockWebSystem'
import BlockDialog from '../../components/HomePage/Products/BlockDialog'
import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'

const BlockchainDevelopment = () => {
  const [card, setCard] = useState({})

  const itemCard = (value) => {
    setCard(value)
  }

  return (
    <>
      <NextSeo
        title="RELIPA GLOBAL | Blockchain and NFT Development"
        description="ICO service, NFT games conversion, crypto wallet, POC - We meet your all needs. As the awareness of the immeasurable potential of Blockchain, Relipa has been focusing on training excellent engineers to stay ahead of the times."
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

export default BlockchainDevelopment
