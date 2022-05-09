import React from 'react'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/News/BlockBreadcrumb'
import BlockMain from '../../components/HomePage/News/BlockMain'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'

export default function News() {
  return (
    <div>
      <HeadHome
        title={'News | Relipa'}
        contentTitle={'this is News content title'}
        contentImg={'this is News link img'}
        contentOgUrl={'this is News content og url '}
        contentKeywords={'this is News contents key word'}
        contentDescription={'this is News content description'}
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <section className='section section-aos' data-aos='fade-up'>
            <div className='container'>
              <div className='row'>
                <BlockMain />
                <div className='col-md-4 col-lg-3'>
                  <aside className='aside-right'>
                    <BlockPopular />
                    <BlockNew />
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </HomePage>
    </div>
  )
}
