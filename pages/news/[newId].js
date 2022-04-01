import React from 'react'
import { useRouter } from 'next/dist/client/router'
export default function NewDetail() {
    const router = useRouter()
  return (
<>
<div>New Detail</div>
<h2>Router ID : {router.query.newId}</h2>
</>

  )
}
