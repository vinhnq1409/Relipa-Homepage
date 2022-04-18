import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Home from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'

export default function News() {
  const router = useRouter()
  return (
    <div>
      <HeadHome/>
      News
    </div>
  )
}

News.layout = Home
