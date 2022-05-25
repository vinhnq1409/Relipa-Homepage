import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Service/AwsMigration/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/AwsMigration/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/AwsMigration/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/AwsMigration/BlockWebSystem'
import BlockWhyChoose from '../../components/HomePage/Service/BlockWhyChoose'

import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'
import { NextSeo } from 'next-seo'

export default function Index() {
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }
  return (
    <HomePage>
      <NextSeo
        title="Aws migration | Relipa"
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
      <BlockBanner />
      <div id="main">
        <BlockBreadcrumb />
        <BlockDesire />
        <BlockWebSystem />
        <BlockWhyChoose />
        <CaseStudy itemCard={itemCard} />
        <BlockDialog item={card} />
      </div>
    </HomePage>
  )
}
