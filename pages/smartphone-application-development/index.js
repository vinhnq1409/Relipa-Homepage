import React from 'react'
import BlockBanner from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockBreadcrumb'
import BlockCaseStudies from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockCaseStudies'
import BlockDesire from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/SmartphoneApplicationDevelopment/BlockWhyChoose'

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
