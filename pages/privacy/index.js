import React from 'react'
import { NextSeo } from 'next-seo'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Privacy/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Privacy/BlockBreadcrumb'
import BlockContent from '../../components/HomePage/Privacy/BlockContent'

const Privacy = () => {
  return (
    <>
      <NextSeo
        title="RELIPA GLOBAL | Privacy Policy"
        description="This example uses more of the available config options."
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
          <BlockBreadcrumb />
          <BlockContent />
        </div>
      </HomePage>
    </>
  )
}

export default Privacy
