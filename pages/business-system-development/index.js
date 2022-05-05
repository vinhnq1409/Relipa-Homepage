import React from 'react'
import BlockBanner from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockBreadcrumb'
import BlockCaseStudies from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockCaseStudies'
import BlockDesire from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/BusinessSystemDevelopment/BlockWhyChoose'

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
