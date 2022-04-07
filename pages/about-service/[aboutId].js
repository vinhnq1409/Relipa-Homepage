import { useRouter } from 'next/router'
import React from 'react'

export default function DetailService() {
  const router = useRouter()
  return (
    <>
      <div>Detail Service</div>
      <h2>routerId : {router.query.aboutId}</h2>
    </>

  )
}
