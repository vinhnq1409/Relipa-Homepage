import React from 'react'
import BlockBanner from '../../components/HomePage/Service/WebSystemDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/WebSystemDevelopment/BlockBreadcrumb'
import BlockCaseStudies from '../../components/HomePage/Service/WebSystemDevelopment/BlockCaseStudies'
import BlockDesire from '../../components/HomePage/Service/WebSystemDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/WebSystemDevelopment/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/WebSystemDevelopment/BlockWhyChoose'

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
