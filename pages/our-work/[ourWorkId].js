import React from 'react'
import { useRouter } from 'next/router'

import Home from '../../layouts/Home'

export default function OurWorkDetail() {
  const router = useRouter()

  return (
    <>
      <div>our Work ID</div>
      <h2>routerId : {router.query.ourWorkId}</h2>
    </>
  )
}

OurWorkDetail.layout = Home
