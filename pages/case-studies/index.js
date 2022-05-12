import React, { useEffect, useState } from 'react'
import BlockBanner from '../../components/HomePage/Case-Studies/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Case-Studies/BlockBreadcrumb'
import BlockCard from '../../components/HomePage/Case-Studies/BlockCard'
import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import BlockFilter from '../../components/HomePage/Case-Studies/BlockFilter'
import BlockPagination from '../../components/HomePage/Case-Studies/BlockPagination'
import HeadHome from '../../components/Head/Head'
import { get } from '../../api/BaseRequest'
import HomePage from '../../layouts/Home'

export default function Index({ dataCaseStudy }) {
  const [data, setData] = useState(dataCaseStudy)
  const [card, setCard] = useState({})
  const itemCard = (value) => {
    setCard(value)
  }

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
                <BlockFilter />
                <BlockCard data={data} itemCard={itemCard} />
              </div>
              <BlockPagination />
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
