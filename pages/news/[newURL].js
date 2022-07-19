import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { get, post } from '../../api/BaseRequest'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/News/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/News/BlockMainDetail'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'
import LinkContact from '../../components/LinkContact'

const NewDetail = ({ dataNew }) => {
  const router = useRouter()
  const { locale } = router
  const { id, title, created_at, content, url_image_meta, friendly_url } = dataNew

  const [dataNews, setDataNews] = useState([])
  const [popularNews, setPopularNews] = useState([])

  const getNews = () => get(`user/${locale}/new`)
  const getPopularNews = () => get(`user/${locale}/new-popular`)

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
      <NextSeo
        title={`${title} | RELIPA News`}
        openGraph={{
          type: 'website',
          locale: 'en',
          url: `https://relipa.global/news/${friendly_url}`,
          images: [
            {
              url: url_image_meta || 'https://relipa.global/user-page/img/relipa-behind-your-success.png',
              width: 1200,
              height: 630,
              type: url_image_meta ? 'image/jpg' : 'image/png',
            },
          ],
        }}
      />
      <HomePage>
        <BlockBanner />
        <div id="main">
          <BlockBreadcrumbDetail title={title} />
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
        <LinkContact/>
      </HomePage>
    </>
  )
}

export default NewDetail

export const getServerSideProps = async ({ locale, params }) => {
  const dataNew = await get(`user/${locale}/news/${params.newURL}`)
  return {
    props: {
      dataNew,
    },
  }
}
