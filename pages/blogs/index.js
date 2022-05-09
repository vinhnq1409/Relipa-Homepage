import React from 'react'
import { get } from '../../api/BaseRequest'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Blogs/BlockBreadcrumb'
import BlockCategory from '../../components/HomePage/Blogs/BlockCategory'
import BlockMain from '../../components/HomePage/Blogs/BlockMain'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import HomePage from '../../layouts/Home'

export default function Blogs({ dataBlogs, popularBlogs }) {
  return (
    <div>
      <HeadHome
        title={'this is Blog'}
        contentTitle={'this is Blog content title'}
        contentImg={'this is Blog link img'}
        contentOgUrl={'this is Blog content og url '}
        contentKeywords={'this is Blog contents key word'}
        contentDescription={'this is Blog content description'}
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <section className='section section-aos' data-aos='fade-up'>
            <div className='container'>
              <div className='row'>
                <BlockMain dataBlogs={dataBlogs}/>
                <div className='col-md-4 col-lg-3'>
                  <aside className='aside-right'>
                    <BlockPopular popularBlogs={popularBlogs}/>
                    <BlockNew dataBlogs={dataBlogs}/>
                    <BlockCategory />
                    <BlockTrend />
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
export async function getStaticProps() {
  const resDataBlogs = await get('user/en/blog')
  const dataBlogs = await resDataBlogs.data
  const resPopularBlogs = await get('user/en/blog-popular')
  const popularBlogs = resPopularBlogs.data
  return {
    props: {
      dataBlogs,
      popularBlogs
    }
  }
}
