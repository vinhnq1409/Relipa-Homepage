import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { resetTag } from '../../redux/slices/tagSlice'
import { get } from '../../api/BaseRequest'
import HeadHome from '../../components/Head/Head'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumb from '../../components/HomePage/Blogs/BlockBreadcrumb'
import BlockMain from '../../components/HomePage/Blogs/BlockMain'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import HomePage from '../../layouts/Home'

export default function Blogs({ Blogs, popularBlogs, tagsTrend }) {
  const [dataBlogs, setDataBlogs] = useState(Blogs)

  const [params, setParams] = useState({
    per_page: 5,
    page: 1,
    tag_id: null
  })

  const { tag } = useSelector((state) => state.tag)
  const dispatch = useDispatch()

  const getBlogs = () => {
    return get('user/en/blog', params)
  }

  const { data: dataByParams } = useQuery(['blogs', params.per_page, params.page, params.tag_id], getBlogs)

  useEffect(() => {
    dataByParams ? setDataBlogs(dataByParams.data) : null
  }, [dataByParams])

  useEffect(() => {
    tag ? setParams({ ...params, page: 1, tag_id: tag }) : null
    return () => dispatch(resetTag())
  }, [tag])

  return (
    <div>
      <HeadHome
        title={'Blog | Relipa'}
        contentTitle={'this is Blog content title'}
        contentImg={'this is Blog link img'}
        contentOgUrl={'this is Blog content og url '}
        contentKeywords={'this is Blog contents key word'}
        contentDescription={'this is Blog content description'}
      />
      <HomePage>
        <BlockBanner />
        <div id='main'>
          <BlockBreadcrumb />
          <section className='section section-aos' data-aos='fade-up'>
            <div className='container'>
              <div className='row'>
                <BlockMain
                  dataBlogs={dataBlogs}
                  count={dataByParams?.total / params.per_page}
                  params={params}
                  setParams={setParams}
                />
                <div className='col-md-4 col-lg-3'>
                  <aside className='aside-right'>
                    <BlockPopular popularBlogs={popularBlogs} />
                    <BlockNew Blogs={Blogs} />
                    <BlockTrend tagsTrend={tagsTrend} params={params} setParams={setParams} />
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
  const resDataBlogs = await get('user/en/blog')
  const Blogs = await resDataBlogs.data

  const resPopularBlogs = await get('user/en/blog-popular')
  const popularBlogs = resPopularBlogs.data

  const tagsTrend = await get('user/tags')
  return {
    props: {
      Blogs,
      popularBlogs,
      tagsTrend
    }
  }
}
