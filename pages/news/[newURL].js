import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import HeadHome from '../../components/Head/Head'
import { get, post } from '../../api/BaseRequest'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/News/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/News/BlockMainDetail'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'

export default function NewDetail({ dataNew }) {
  const router = useRouter()
  const {locale} = router
  const { id, title, created_at, content, url_image_meta } = dataNew
  const [dataNews, setDataNews] = useState([])
  const [popularNews, setPopularNews] = useState([])

  const getNews = () => {
    return get(`user/${locale}/new`)
  }
  const getPopularNews = () => {
    return get(`user/${locale}/new-popular`)
  }

  const { data: news } = useQuery('news', getNews)
  const { data: popular } = useQuery('popularNews', getPopularNews)

  useEffect(() => {
    if (news) {
      setDataNews(news.data)
    }
  }, [news])

  useEffect(() => {
    if (popular) {
      setPopularNews(popular.data)
    }
  }, [popular])

  useEffect(() => {
    const countView = setTimeout(async () => {
      await post('statistic', {
        name_page: 'news',
        id_item: id,
      })
    }, 10000)
    return () => clearTimeout(countView)
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
        <div id="main">
          <BlockBreadcrumbDetail />
          <section className="section section-aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <BlockMainDetail
                  title={title}
                  created_at={created_at}
                  url_image_meta={url_image_meta}
                  content={content}
                />
                <div className="col-md-4 col-lg-3">
                  <aside className="aside-right">
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
export async function getStaticPaths({ locales }) {
  const resEN = await get('user/en/new')
  const resJA = await get('user/ja/new')
  const pathsEN = resEN.data.map((newItem) => ({ params: { newURL: newItem.friendly_url }, locale: 'en' }))
  const pathsJA = resJA.data.map((newItem) => ({ params: { newURL: newItem.friendly_url }, locale: 'ja' }))
  const paths = [...pathsEN, ...pathsJA]
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params, locale }) {
  const dataNew = await get(`user/${locale}/news/${params.newURL}`)
  return { props: { dataNew } }
}
