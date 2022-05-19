import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { get } from '../../api/BaseRequest'
import HeadHome from '../../components/Head/Head'
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
    <div>
      <HeadHome
        title={'Company News & Announcement | Relipa'}
        contentTitle={'this is News content title'}
        contentImg={'this is News link img'}
        contentOgUrl={'this is News content og url '}
        contentKeywords={'this is News contents key word'}
        contentDescription={'this is News content description'}
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
    </div>
  )
}
export async function getStaticProps({ locale }) {
  const resDataNews = await get(`user/${locale}/new`)
  const news = await resDataNews.data

  return {
    props: { news },
  }
}
