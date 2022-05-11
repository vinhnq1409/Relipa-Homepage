import React from 'react'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/Company/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import BlockCompanyProfile from '../../components/HomePage/Company/BlockCompanyProfile'
import BlockCEOMessage from '../../components/HomePage/Company/BlockCEOMessage'
import BlockMissionValues from '../../components/HomePage/Company/BlockMissionValues'
import BlockCoreMembers from '../../components/HomePage/Company/BlockCoreMembers'
import BlockSideBar from '../../components/HomePage/Company/BlockSideBar'
import HomePage from '../../layouts/Home'

export default function Company() {
  return (
    <div>
      <HeadHome
        title={'Company | Relipa'}
        contentTitle={'this is company content title'}
        contentImg={'this is company link img'}
        contentOgUrl={'this is company content og url '}
        contentKeywords={'this is company contents key word'}
        contentDescription={'this is company content description'}
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
                <BlockCoreMembers />
              </div>
              <BlockSideBar />
            </div>
          </div>
        </div>
      </HomePage>
    </div>
  )
}

