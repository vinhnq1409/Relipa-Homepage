import React from 'react'
import { NextSeo } from 'next-seo'
import HomePage from '../../layouts/Home'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'
import BlockBreadcrumb from '../../components/HomePage/Service/AboutService/BlockBreadcrumb'
import LinkContact from '../../components/LinkContact'

const AboutService = () => {
  return (
    <>
      <NextSeo
        title="RELIPA GLOBAL | Our service"
        description="Leading the way in cutting-edge technology, with over 6 year experience in consulting and development projects, we provide the most optimal services with your business through fair price, great quality and highly secured."
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
          <BlockBreadcrumb />
          <BlockService />
          <BlockWhy />
          <BlockCompare />
          <BlockStepToUse />
        </div>
        <LinkContact/>
      </HomePage>
    </>
  )
}

export default AboutService
