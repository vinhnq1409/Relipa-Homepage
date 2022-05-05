import React from 'react'
import BlockBanner from '../../components/HomePage/Case-Studies/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Case-Studies/BlockBreadcrumb'
import BlockCard from '../../components/HomePage/Case-Studies/BlockCard'
import BlockDialog from '../../components/HomePage/Case-Studies/BlockDialog'
import BlockFilter from '../../components/HomePage/Case-Studies/BlockFilter'
import BlockPagination from '../../components/HomePage/Case-Studies/BlockPagination'

import HomePage from '../../layouts/Home'

export default function Index() {
  return (
    <HomePage>
      <BlockBanner />
      <div id='main'>
        <BlockBreadcrumb />
        <section class='section section-aos' data-aos='fade-up'>
          <div class='container'>
            <div id='masonry-filter'>
              <BlockFilter />
              <BlockCard />
            </div>
            <BlockPagination />
          </div>
        </section>
        <BlockDialog />
      </div>
    </HomePage>
  )
}
