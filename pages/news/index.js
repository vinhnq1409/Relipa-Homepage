import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Home from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'

export default function News() {
  const router = useRouter()
  return (
    <div>
      <HeadHome
        title={'this is News'}
        contentTitle={'this is News content title'}
        contentImg={'this is News link img'}
        contentOgUrl={'this is News content og url '}
        contentKeywords={'this is News contents key word'}
        contentDescription={'this is News content description'}
      />
      News
    </div>
  )
}

News.layout = Home
