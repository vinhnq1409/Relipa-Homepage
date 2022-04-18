import React from 'react'
import HeadHome from '../../components/Head/Head'
import Home from '../../layouts/Home'

export default function OurWork() {
  return (
    <div>
      <HeadHome
        title={'this is Our Work'}
        contentTitle={'this is Our Work content title'}
        contentImg={'this is Our Work link img'}
        contentOgUrl={'this is Our Work content og url '}
        contentKeywords={'this is Our Work contents key word'}
        contentDescription={'this is Our Work content description'}
      />
      Our Work
    </div>
  )
}

OurWork.layout = Home
