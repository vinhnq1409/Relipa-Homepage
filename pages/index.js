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

export default function Index() {
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
      <BlockBanner />
      <div id='main'>
        <BlockService />
        <BlockOutClient />
        <BlockVoice />
        <BlockNew dataBlogs={dataBlogs} dataNews={dataNews} />
      </div>
    </HomePage>
  )
}
