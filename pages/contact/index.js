import React from 'react'
import HeadHome from '../../components/Head/Head'
import Home from '../../layouts/Home'

export default function Contact() {
  return (
    <div>
      <HeadHome
        title={'this is Contact'}
        contentTitle={'this is Contact content title'}
        contentImg={'this is Contact link img'}
        contentOgUrl={'this is Contact content og url '}
        contentKeywords={'this is Contact contents key word'}
        contentDescription={'this is Contact content description'}
      />
      contact
    </div>
  )
}

Contact.layout = Home
