import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Company/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import BlockCompanyProfile from '../../components/HomePage/Company/BlockCompanyProfile'
import BlockCEOMessage from '../../components/HomePage/Company/BlockCEOMessage'
import BlockMissionValues from '../../components/HomePage/Company/BlockMissionValues'
import BlockCoreMembers from '../../components/HomePage/Company/BlockCoreMembers'
import BlockSideBar from '../../components/HomePage/Company/BlockSideBar'
import HomePage from '../../layouts/Home'
import BlockPopup from '../../components/HomePage/Company/BlockPopup'

const Company = () => {
  const [infoCoreMember, setInfoCoreMember] = useState({
    name: '',
    title: '',
    desc: '',
    img: '',
  })

  return (
    <>
      <NextSeo
        title='RELIPA GLOBAL | About us'
        description='Relipa Co., Ltd. is a IT and Blockchain development company, founded in 2016 and headquartered in Vietnam. Contact us: sales@relipasoft.com, 22F, B Tower, Song Da Building, Pham Hung Street, My Dinh 1, Nam Tu Liem, Ha Noi, Viet Nam.'
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
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

export default Company
