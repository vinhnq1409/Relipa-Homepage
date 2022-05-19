import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { get } from '../api/BaseRequest'
import BlockBanner from '../components/HomePage/Home/BlockBanner'
import BlockNew from '../components/HomePage/Home/BlockNew'
import BlockOutClient from '../components/HomePage/Home/BlockOutClient'
import BlockService from '../components/HomePage/Home/BlockService'
import BlockVoice from '../components/HomePage/Home/BlockVoice'
import HomePage from '../layouts/Home'
import HeadHome from '../components/Head/Head'

export default function Index({ voice }) {
  const router = useRouter()
  const { locale } = router

  const getBlogs = () => {
    return get(`user/${locale}/blog`)
  }
  const getNews = () => {
    return get(`user/${locale}/new`)
  }

  const { data: dataBlogs } = useQuery('blogs', getBlogs)
  const { data: dataNews } = useQuery('news', getNews)

  return (
    <HomePage>
      <HeadHome
        title={'Blockchain and Software Development | Relipa'}
        contentTitle={'this is home content title'}
        contentImg={'this is home link img'}
        contentOgUrl={'this is home content og url '}
        contentKeywords={'this is home contents key word'}
        contentDescription={'this is home content description'}
      />
      <BlockBanner />
      <div id="main">
        <BlockService />
        <BlockOutClient />
        <BlockVoice voice={voice} />
        <BlockNew dataBlogs={dataBlogs} dataNews={dataNews} />
      </div>
    </HomePage>
  )
}

export async function getStaticProps({ locale }) {
  const resDataBlogs = await get(`user/${locale}/voice`)
  const voice = await resDataBlogs.data

  return {
    props: { voice },
  }
}
