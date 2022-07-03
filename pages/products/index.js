import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from 'react-query'
import Pagination from '@material-ui/lab/Pagination'
import { useRouter } from 'next/router'
import BlockBanner from '../../components/HomePage/Products/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Products/BlockBreadcrumb'
import BlockCard from '../../components/HomePage/Products/BlockCard'
import BlockDialog from '../../components/HomePage/Products/BlockDialog'
import BlockFilter from '../../components/HomePage/Products/BlockFilter'
import { get } from '../../api/BaseRequest'
import HomePage from '../../layouts/Home'

const Product = ({ dataCaseStudy }) => {
  const [data, setData] = useState(dataCaseStudy)
  const [params, setParams] = useState({
    page: 1,
    per_page: 12,
    type: null,
  })
  const [card, setCard] = useState({})
  const router = useRouter()
  const { locale } = router

  const getCaseStudy = async() => {
    return await get(`user/${locale}/works`, params)
  }

  const { data: dataCaseStudies } = useQuery(['getCaseStudy', params.page, params.per_page, params.type], getCaseStudy)

  useEffect(() => {
    setData(dataCaseStudies)
  }, [dataCaseStudies])

  useEffect(() => {
    if (router.pathname === '/products') {
      switch (router.query.slug) {
        case 'webSystem': {
          setParams({
            ...params,
            type: 1,
          })
        }
        break
        // case 'businessSystem': {
        //   setParams({
        //     ...params,
        //     type: 2,
        //   })
        // }
        // break
        case 'blockchain': {
          setParams({
            ...params,
            type: 3,
          })
        }
          break
        case 'application': {
          setParams({
            ...params,
            type: 4,
          })
        }
          break
        default : {
          const data = { ...params }
          delete data.type
          setParams(data)
        }
          break
      }
    }
  }, [])

  const itemCard = (value) => {
    setCard(value)
  }

  const handlePaginationChange = (e, page) => {
    setParams({
      ...params,
      page: page,
    })
  }

  const countPagination = Math.ceil(data?.total / 12)

  return (
    <>
      <NextSeo
        title="Products | Relipa"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
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
          <BlockDialog item={card}  />
        </div>
      </HomePage>
    </>
  )
}

export default Product

export async function getServerSideProps({ locale }) {
  const dataCaseStudy = await get(`user/${locale}/works`, { per_page: 12 })

  return { props: { dataCaseStudy }}
}
