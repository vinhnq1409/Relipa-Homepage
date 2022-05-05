import React from 'react'
import BlockBanner from '../../components/HomePage/Service/BlockchainDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/BlockchainDevelopment/BlockBreadcrumb'
import BlockCaseStudies from '../../components/HomePage/Service/BlockchainDevelopment/BlockCaseStudies'
import BlockDesire from '../../components/HomePage/Service/BlockchainDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/BlockchainDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/BlockchainDevelopment/BlockWhyChoose'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <BlockDesire />
        <BlockWebSystem />
        <BlockWhyChoose />
        <BlockCaseStudies />
      </div>
    </HomePage>
  )
}
