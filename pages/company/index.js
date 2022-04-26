import React from 'react'
import Home from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/Company/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Company/BlockBreadcrumb'
import BlockCompanyProfile from '../../components/HomePage/Company/BlockCompanyProfile'
import BlockCEOMessage from '../../components/HomePage/Company/BlockCEOMessage'
import BlockMissionValues from '../../components/HomePage/Company/BlockMissionValues'
import BlockCoreMembers from '../../components/HomePage/Company/BlockCoreMembers'

export default function Company() {
  return (
    <div>
      <HeadHome
        title={'this is company'}
        contentTitle={'this is company content title'}
        contentImg={'this is company link img'}
        contentOgUrl={'this is company content og url '}
        contentKeywords={'this is company contents key word'}
        contentDescription={'this is company content description'}
      />
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <div class='container'>
          <div class='row'>
            <div class='col-lg-10'>
              <BlockCompanyProfile />
              <BlockCEOMessage />
              <BlockMissionValues />
              <BlockCoreMembers />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Company.layout = Home
