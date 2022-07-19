import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { get, post } from '../../api/BaseRequest'
import { useDispatch } from 'react-redux'
import { addTag } from '../../redux/slices/tagSlice'
import HomePage from '../../layouts/Home'
import BlockBanner from '../../components/HomePage/Blogs/BlockBanner'
import BlockBreadcrumbDetail from '../../components/HomePage/Blogs/BlockBreadcrumbDetail'
import BlockMainDetail from '../../components/HomePage/Blogs/BlockMainDetail'
import BlockNew from '../../components/HomePage/Blogs/BlockNew'
import BlockPopular from '../../components/HomePage/Blogs/BlockPopular'
import BlockTrend from '../../components/HomePage/Blogs/BlockTrend'
import BlockRelated from '../../components/HomePage/Blogs/BlockRelated'
import LinkContact from '../../components/LinkContact'

export default function BlogDetail({ dataBlog }) {
  const router = useRouter()
  const { locale } = router
  const { id, title, created_at, content, url_image_meta, tags: tagsDetail, friendly_url } = dataBlog
  const [dataBlogs, setDataBlogs] = useState([])
  const [popularBlogs, setPopularBlogs] = useState([])
  const [tagsTrend, setTagsTrend] = useState([])

  const getBlogs = () => get(`user/${locale}/blog`)
  const getPopularBlogs = () => get(`user/${locale}/blog-popular`)
  const getTags = () => get(`user/${locale}/tags`)

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

  const dispatch = useDispatch()

  const handleChooseTag = (tag) => {
    dispatch(addTag(tag))
    router.push('/blogs')
  }
  
  return (
    <>
      <NextSeo
        title={`${title} | RELIPA Blog`}
        openGraph={{
          type: 'website',
          locale: 'en',
          url: `https://relipa.global/blogs/${friendly_url}`,
          images: [
            {
              url: url_image_meta || 'https://relipa.global/user-page/img/relipa-behind-your-success.png',
              width: 1200,
              height: 630,
              type: url_image_meta ? 'image/jpg' : 'image/png',
            },
          ],
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
                  tagsDetail={tagsDetail}
                  handleChooseTag={handleChooseTag}
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
        <LinkContact/>
      </HomePage>
    </>
  )
}

export async function getServerSideProps({ locale, params }) {
  const dataBlog = await get(`user/${locale}/blogs/${params.blogURL}`)
  return {
    props: {
      dataBlog,
    },
  }
}
