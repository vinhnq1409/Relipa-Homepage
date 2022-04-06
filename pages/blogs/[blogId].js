import React from 'react'
import { useRouter } from 'next/dist/client/router'

import Home from '../../layouts/Home'

export default function BlogDetail() {
  const router = useRouter()

  return (
    <>
      <div>blog Detail</div>
      <h2>Router ID : {router.query.blogId}</h2>
    </>
  )
}

BlogDetail.layout = Home
