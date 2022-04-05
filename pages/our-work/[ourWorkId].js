import React from 'react'
import { useRouter } from 'next/router'
export default function ourWorkID() {
  const router = useRouter()
  return (
    <>
      <div>our Work ID</div>
      <h2>routerId : {router.query.ourWorkId}</h2>
    </>
  )
}
