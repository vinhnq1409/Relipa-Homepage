import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Home from '../../layouts/Home'

export default function NewsText() {
  const router = useRouter()
  const onhandle=()=>{
    router.push({
        pathname: '/news/',
        query: { slug: 'about', mode: 'edit', name: {
          titile: 'a',
        }}
      })
  }
  return <div onClick={onhandle} >Button</div>
}

NewsText.layout = Home
