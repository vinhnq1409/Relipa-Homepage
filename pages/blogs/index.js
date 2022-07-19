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
import LinkContact from '../../components/LinkContact'

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
        title="Blockchain and Software Development | RELIPA Blog"
        description="Stay tuned with the lastest tech blogs of trending IT waves that we are ridding. Discover great opportunities and tech solutions with Relipa."
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
        <LinkContact/>
      </HomePage>
    </>
  )
}

export const getServerSideProps = async({ locale }) => {
  const resDataBlogs = await get(`user/${locale}/blog`)
  const blogs = await resDataBlogs.data

  return {
    props: { blogs },
  }
}
