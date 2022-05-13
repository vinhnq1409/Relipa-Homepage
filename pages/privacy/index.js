import React from 'react'
import HeadHome from '../../components/Head/Head'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Privacy/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Privacy/BlockBreadcrumb'
import BlockContent from '../../components/HomePage/Privacy/BlockContent'

export default function Contact() {
  return (
    <div>
      <HeadHome
        title={'Privacy | Relipa'}
        contentTitle={'this is Contact content title'}
        contentImg={'this is Contact link img'}
        contentOgUrl={'this is Contact content og url '}
        contentKeywords={'this is Contact contents key word'}
        contentDescription={'this is Contact content description'}
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <BlockContent />
        </div>
      </HomePage>
    </div>
  )
}
