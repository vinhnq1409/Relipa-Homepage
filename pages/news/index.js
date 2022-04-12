import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Home from '../../layouts/Home'

export default function News() {
  const router = useRouter()
  console.log(router.query)
  return <div>News</div>
}

News.layout = Home
