import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { get } from '../../api/BaseRequest'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/News/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/News/BlockBreadcrumb'
import BlockMain from '../../components/HomePage/News/BlockMain'
import BlockNew from '../../components/HomePage/News/BlockNew'
import BlockPopular from '../../components/HomePage/News/BlockPopular'
import HomePage from '../../layouts/Home'

export default function News({ news, popularNews }) {
  const [dataNews, setDataNews] = useState(news)

  const [params, setParams] = useState({
    per_page: 2,
    page: 1
  })

  const getNews = () => {
    return get('user/en/new', params)
  }

  const { data: dataByParams } = useQuery(['news', params.per_page, params.page], getNews)

  useEffect(() => {
    dataByParams ? setDataNews(dataByParams.data) : null
  }, [dataByParams])

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
                <BlockMain
                  dataNews={dataNews}
                  count={dataByParams?.total / params.per_page}
                  params={params}
                  setParams={setParams}
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
    </div>
  )
}
export async function getStaticProps() {
  const resDataNews = await get('user/en/new')
  const news = await resDataNews.data

  const resPopularNews = await get('user/en/new-popular')
  const popularNews = resPopularNews.data

  return {
    props: {
      news,
      popularNews
    }
  }
}
