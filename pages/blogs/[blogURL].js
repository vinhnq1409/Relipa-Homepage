import React, { useEffect } from 'react'
import { get, post } from '../../api/BaseRequest'
import HeadHome from '../../components/Head/Head'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/Blogs/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/Blogs/BlockMainDetail'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import BlockRelated from '../../components/HomePage/Blogs/BlockRelated'

export default function BlogDetail({ dataBlog, dataBlogs, popularBlogs, tagsTrend }) {
  const { id, title, created_at, content, url_image_meta } = dataBlog
  useEffect(() => {
    const countView = setTimeout(async () => {
      await post('statistic', {
        name_page: 'blogs',
        id_item: id,
      })
    }, 10000)
    return () => clearTimeout(countView)
  }, [])
  return (
    <>
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
        <div id="main">
          <BlockBreadcrumbDetail title={title} />
          <section className="section section-aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <BlockMainDetail
                  title={title}
                  created_at={created_at}
                  url_image_meta={url_image_meta}
                  content={content}
                />
                <div className="col-md-4 col-lg-3">
                  <aside className="aside-right">
                    <BlockPopular popularBlogs={popularBlogs} />
                    <BlockNew Blogs={dataBlogs} />
                    <BlockTrend tagsTrend={tagsTrend} isDetail={true} />
                  </aside>
                </div>
              </div>
            </div>
          </section>
          <BlockRelated dataBlog={dataBlog} />
        </div>
      </HomePage>
    </>
  )
}

export async function getStaticPaths() {
  const res = await get('user/en/blog')
  return {
    paths: res.data.map((blog) => ({ params: { blogURL: blog.friendly_url } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const dataBlog = await get(`user/en/blogs/${params.blogURL}`)

  const resDataBlogs = await get('user/en/blog')
  const dataBlogs = await resDataBlogs.data

  const resPopularBlogs = await get('user/en/blog-popular')
  const popularBlogs = resPopularBlogs.data

  const tagsTrend = await get('user/tags')

  return { props: { dataBlogs, dataBlog, popularBlogs, tagsTrend }, revalidate: 10 }
}
