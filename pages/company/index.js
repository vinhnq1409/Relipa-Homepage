import React, { useState } from 'react'
import BlockBanner from '../../components/HomePage/Company/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import BlockCompanyProfile from '../../components/HomePage/Company/BlockCompanyProfile'
import BlockCEOMessage from '../../components/HomePage/Company/BlockCEOMessage'
import BlockMissionValues from '../../components/HomePage/Company/BlockMissionValues'
import BlockCoreMembers from '../../components/HomePage/Company/BlockCoreMembers'
import BlockSideBar from '../../components/HomePage/Company/BlockSideBar'
import HomePage from '../../layouts/Home'
import BlockPopup from '../../components/HomePage/Company/BlockPopup'
import { NextSeo } from 'next-seo'

export default function Company() {
  const [infoCoreMember, setInfoCoreMember] = useState({
    name: '',
    title: '',
    desc: '',
    img: '',
  })
  return (
    <>
      <NextSeo
        title="Relipa | Blockchain and Software Development"
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
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <BlockCompanyProfile />
                <BlockCEOMessage />
                <BlockMissionValues />
                <BlockCoreMembers infoCoreMember={infoCoreMember} setInfoCoreMember={setInfoCoreMember} />
              </div>
              <BlockSideBar />
            </div>
          </div>
        </div>
        <BlockPopup infoCoreMember={infoCoreMember} />
      </HomePage>
    </>
  )
}
