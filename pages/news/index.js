import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { get } from '../../api/BaseRequest'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/News/BlockBreadcrumb'
import BlockMain from '../../components/HomePage/News/BlockMain'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'

export default function News({ news }) {
  const [dataNews, setDataNews] = useState(news)
  const [popularNews, setPopularNews] = useState([])

  const router = useRouter()
  const { locale } = router
  const [params, setParams] = useState({
    per_page: 5,
    page: 1,
  })

  const getNews = () => {
    return get(`user/${locale}/new`, params)
  }
  const getPopularNews = () => {
    return get(`user/${locale}/new-popular`)
  }

  const { data: dataByParams } = useQuery(['news', params.per_page, params.page], getNews)
  const { data: popular } = useQuery('popularNews', getPopularNews)

  useEffect(() => {
    dataByParams ? setDataNews(dataByParams.data) : null
  }, [dataByParams])

  useEffect(() => {
    if (popular) {
      setPopularNews(popular.data)
    }
  }, [popular])
  return (
    <>
      <NextSeo
        title="Company News & Announcement | Relipa"
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
          <section className="section section-aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <BlockMain
                  dataNews={dataNews}
                  count={dataByParams?.total / params.per_page}
                  params={params}
                  setParams={setParams}
                />
                <div className="col-md-4 col-lg-3">
                  <aside className="aside-right">
                    <BlockPopular popularNews={popularNews} />
                    <BlockNew dataNews={news} />
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
export async function getServerSideProps({ locale }) {
  const resDataNews = await get(`user/${locale}/new`)
  const news = await resDataNews.data

  return {
    props: { news },
  }
}
