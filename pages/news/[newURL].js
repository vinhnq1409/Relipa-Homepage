import React, { useEffect } from 'react'
import HeadHome from '../../components/Head/Head'
import { get, post } from '../../api/BaseRequest'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/News/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/News/BlockMainDetail'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'

export default function NewDetail({ dataNews, dataNew, popularNews }) {
  const { id, title, created_at, content, url_image_meta } = dataNew

  useEffect(() => {
    const countView = setTimeout(async() => {
      await post('statistic', {
        name_page: 'news',
        id_item: id
      })
    }, 10000)
    return (() => clearTimeout(countView))
  }, [])

  return (
    <>
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
          <BlockBreadcrumbDetail />
          <section className='section section-aos' data-aos='fade-up'>
            <div className='container'>
              <div className='row'>
                <BlockMainDetail
                  title={title}
                  created_at={created_at}
                  url_image_meta={url_image_meta}
                  content={content}
                />
                <div className='col-md-4 col-lg-3'>
                  <aside className='aside-right'>
                    <BlockPopular popularNews={popularNews} />
                    <BlockNew dataNews={dataNews} />
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </HomePage>
    </>
  )
}
export async function getStaticPaths() {
  const res = await get('user/en/new', {per_page: 100, page: 1})
  return {
    paths: res.data.map((newItem) => ({ params: { newURL: newItem.friendly_url }})),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const dataNew = await get(`user/en/news/${params.newURL}`)

  const resDataNews = await get('user/en/new')
  const dataNews = await resDataNews.data

  const resPopularNews = await get('user/en/new-popular')
  const popularNews = resPopularNews.data

  return { props: { dataNews, dataNew, popularNews }}
}
