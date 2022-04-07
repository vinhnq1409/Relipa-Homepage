import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Home from '../../layouts/Home'

export default function NewDetail() {
  const router = useRouter()
  return (
    <>
      <div>New Detail</div>
      <h2>Router ID : {router.query.newId}</h2>
    </>
  )
}

NewDetail.layout = Home
