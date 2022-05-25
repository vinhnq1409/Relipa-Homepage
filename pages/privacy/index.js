import React from 'react'
import { NextSeo } from 'next-seo'
import HeadHome from '../../components/Head/Head'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Privacy/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Privacy/BlockBreadcrumb'
import BlockContent from '../../components/HomePage/Privacy/BlockContent'

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Privacy | Relipa"
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
          <BlockContent />
        </div>
      </HomePage>
    </>
  )
}
