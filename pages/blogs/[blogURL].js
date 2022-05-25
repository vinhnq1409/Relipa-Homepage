import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { get, post } from '../../api/BaseRequest'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/Blogs/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/Blogs/BlockMainDetail'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import BlockRelated from '../../components/HomePage/Blogs/BlockRelated'

export default function BlogDetail({ dataBlog }) {
  const router = useRouter()
  const { locale } = router
  const { id, title, created_at, content, url_image_meta } = dataBlog
  const [dataBlogs, setDataBlogs] = useState([])
  const [popularBlogs, setPopularBlogs] = useState([])
  const [tagsTrend, setTagsTrend] = useState([])

  const getBlogs = () => {
    return get(`user/${locale}/blog`)
  }

  const getPopularBlogs = () => {
    return get(`user/${locale}/blog-popular`)
  }

  const getTags = () => {
    return get(`user/${locale}/tags`)
  }
  const { data: blogs } = useQuery('blogs', getBlogs)
  const { data: popular } = useQuery('popularNews', getPopularBlogs)
  const { data: tags } = useQuery('tags', getTags)

  useEffect(() => {
    if (tags) {
      setTagsTrend(tags)
    }
  }, [tags])

  useEffect(() => {
    if (blogs) {
      setDataBlogs(blogs.data)
    }
  }, [blogs])

  useEffect(() => {
    if (popular) {
      setPopularBlogs(popular.data)
    }
  }, [popular])

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
                    <BlockNew blogs={dataBlogs} />
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

export async function getStaticPaths({ locales }) {
  const resEN = await get('user/en/blog')
  const resJA = await get('user/ja/blog')
  const pathsEN = resEN.data.map((blog) => ({ params: { blogURL: blog.friendly_url }, locale: 'en' }))
  const pathsJA = resJA.data.map((blog) => ({ params: { blogURL: blog.friendly_url }, locale: 'ja' }))
  const paths = [...pathsEN, ...pathsJA]
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params, locale }) {
  const dataBlog = await get(`user/${locale}/blogs/${params.blogURL}`)
  return { props: { dataBlog }, revalidate: 10 }
}
