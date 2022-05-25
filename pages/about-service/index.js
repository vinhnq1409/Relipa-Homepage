import React from 'react'
import BlockCompare from '../../components/HomePage/Service/AboutService/BlockCompare'
import BlockBanner from '../../components/HomePage/Service/AboutService/BlockBanner'
import BlockService from '../../components/HomePage/Service/AboutService/BlockService'
import BlockStepToUse from '../../components/HomePage/Service/AboutService/BlockStepsToUse'
import BlockWhy from '../../components/HomePage/Service/AboutService/BlockWhy'
import HomePage from '../../layouts/Home'
import BlockBreadcrumb from '../../components/HomePage/Service/AboutService/BlockBreadcrumb'
import { NextSeo } from 'next-seo'


export default function Index() {
  return (
    <>
      <NextSeo
        title="About Service | Relipa"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
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
      </HomePage>
    </>
  )
}
