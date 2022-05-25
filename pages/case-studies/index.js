import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import BlockBanner from '../../components/HomePage/Case-Studies/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Case-Studies/BlockBreadcrumb'
import BlockCard from '../../components/HomePage/Case-Studies/BlockCard'
import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import BlockFilter from '../../components/HomePage/Case-Studies/BlockFilter'
import { get } from '../../api/BaseRequest'
import HomePage from '../../layouts/Home'
import { useQuery } from 'react-query'
import Pagination from '@material-ui/lab/Pagination'
import { useRouter } from 'next/router'

export default function Index({ dataCaseStudy }) {
  const [data, setData] = useState(dataCaseStudy)
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
    type: null,
  })
  const [card, setCard] = useState({})
  const router = useRouter()
  const { locale } = router

  const getCaseStudy = async () => {
    return await get(`user/${locale}/works`, params)
  }

  const { data: dataCaseStudies } = useQuery(['getCaseStudy', params.page, params.per_page, params.type], getCaseStudy)

  useEffect(() => {
    setData(dataCaseStudies)
  }, [dataCaseStudies])

  const itemCard = (value) => {
    setCard(value)
  }

  const handlePaginationChange = (e, page) => {
    setParams({
      ...params,
      page: page,
    })
  }

  const countPagination = Math.ceil(data?.total / 10)

  return (
    <>
      <NextSeo
        title="Case Studies | Relipa"
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
              <div id="masonry-filter">
                <BlockFilter params={params} setParams={setParams} />
                <BlockCard data={data} itemCard={itemCard} />
              </div>
              <nav className="pagination-wrapper mt-3" aria-label="Page navigation example">
                {countPagination >= 2 && (
                  <Pagination
                    className="pagination justify-content-center"
                    count={countPagination}
                    shape="rounded"
                    color="primary"
                    size="large"
                    onChange={handlePaginationChange}
                    page={params.page}
                  />
                )}
              </nav>
            </div>
          </section>
          <BlockDialog item={card} />
        </div>
      </HomePage>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const dataCaseStudy = await get(`user/${locale}/works`)

  return { props: { dataCaseStudy } }
}
