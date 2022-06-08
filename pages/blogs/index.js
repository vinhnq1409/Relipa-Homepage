import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { resetTag } from '../../redux/slices/tagSlice'
import { get } from '../../api/BaseRequest'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Blogs/BlockBreadcrumb'
import BlockMain from '../../components/HomePage/Blogs/BlockMain'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import HomePage from '../../layouts/Home'

export default function Blogs({ blogs }) {
  const [dataBlogs, setDataBlogs] = useState(blogs)
  const router = useRouter()
  const { locale } = router

  const [popularBlogs, setPopularBlogs] = useState([])
  const [tagsTrend, setTagsTrend] = useState([])

  const [params, setParams] = useState({
    per_page: 5,
    page: 1,
    tag_id: null,
  })

  const { tag } = useSelector((state) => state.tag)
  const dispatch = useDispatch()

  const getBlogs = () => {
    return get(`user/${locale}/blog`, params)
  }

  const getPopularBlogs = () => {
    return get(`user/${locale}/blog-popular`)
  }

  const getTags = () => {
    return get(`user/${locale}/tags`)
  }

  const { data: dataByParams } = useQuery(['blogs', params.per_page, params.page, params.tag_id], getBlogs)
  const { data: popular } = useQuery('popularNews', getPopularBlogs)
  const { data: tags } = useQuery('tags', getTags)

  useEffect(() => {
    dataByParams ? setDataBlogs(dataByParams.data) : null
  }, [dataByParams])

  useEffect(() => {
    tag ? setParams({ ...params, page: 1, tag_id: tag.id }) : null
    return () => dispatch(resetTag())
  }, [tag])

  useEffect(() => {
    if (tags) {
      setTagsTrend(tags)
    }
  }, [tags])

  useEffect(() => {
    if (popular) {
      setPopularBlogs(popular.data)
    }
  }, [popular])
  return (
    <>
      <NextSeo
        title="Tech Insights & Tech Blogs | Relipa"
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
                  dataBlogs={dataBlogs}
                  count={dataByParams?.total / params.per_page}
                  params={params}
                  setParams={setParams}
                />
                <div className="col-md-4 col-lg-3">
                  <aside className="aside-right">
                    <BlockPopular popularBlogs={popularBlogs} />
                    <BlockNew blogs={blogs} />
                    <BlockTrend tagsTrend={tagsTrend} params={params} setParams={setParams} />
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
  const resDataBlogs = await get(`user/${locale}/blog`)
  const blogs = await resDataBlogs.data

  return {
    props: { blogs },
  }
}
