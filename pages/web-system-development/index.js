import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Service/WebSystemDevelopment/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Service/WebSystemDevelopment/BlockBreadcrumb'
import BlockDesire from '../../components/HomePage/Service/WebSystemDevelopment/BlockDesire'
import BlockWebSystem from '../../components/HomePage/Service/WebSystemDevelopment/BlockWebSystem'
import BlockDialog from '../../components/HomePage/Products/BlockDialog'
import HomePage from '../../layouts/Home'
import CaseStudy from '../../components/HomePage/Service/BlockCaseStudy'
import LinkContact from '../../components/LinkContact'

const WebSystemDevelopment = () => {
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }

  return (
    <>
      <NextSeo
        title="Websystem Development | Relipa"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
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
          <BlockDesire />
          <BlockWebSystem />
          <CaseStudy itemCard={itemCard} />
          <BlockDialog item={card} />
        </div>
        <LinkContact/>
      </HomePage>
    </>
  )
}

export default WebSystemDevelopment
