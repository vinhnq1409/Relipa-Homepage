import React, { useEffect, useState } from 'react'
import BlockBanner from '../../components/HomePage/Case-Studies/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Case-Studies/BlockBreadcrumb'
import BlockCard from '../../components/HomePage/Case-Studies/BlockCard'
import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import BlockFilter from '../../components/HomePage/Case-Studies/BlockFilter'
import HeadHome from '../../components/Head/Head'
import { get } from '../../api/BaseRequest'
import HomePage from '../../layouts/Home'
import { useQuery } from 'react-query'
import Pagination from '@material-ui/lab/Pagination'

export default function Index({ dataCaseStudy }) {
  const [data, setData] = useState(dataCaseStudy)
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
    type: null,
  })
  const [card, setCard] = useState({})

  const getCaseStudy = async () => {
    return await get(`user/en/works`, params)
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
      <HeadHome
        title={'Case Studies|Relipa'}
        contentTitle={'this is company content title'}
        contentImg={'this is company link img'}
        contentOgUrl={'this is company content og url '}
        contentKeywords={'this is company contents key word'}
        contentDescription={'this is company content description'}
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

export async function getStaticProps() {
  const dataCaseStudy = await get(`user/en/works`)

  return { props: { dataCaseStudy } }
}
