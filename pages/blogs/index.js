import React from 'react'
import Home from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'

export default function Blogs() {
  return (
    <div>
      <HeadHome
        title={'this is Blog'}
        contentTitle={'this is Blog content title'}
        contentImg={'this is Blog link img'}
        contentOgUrl={'this is Blog content og url '}
        contentKeywords={'this is Blog contents key word'}
        contentDescription={'this is Blog content description'}
      />
      Blogs
    </div>
  )
}

Blogs.layout = Home
