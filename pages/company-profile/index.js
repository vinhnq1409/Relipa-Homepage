import React from 'react'
import Home from '../../layouts/Home'
import HeadHome from '../../components/Head/Head'

export default function CompanyProfile() {
  return (
    <div>
      <HeadHome
        title={'this is company'}
        contentTitle={'this is company content title'}
        contentImg={'this is company link img'}
        contentOgUrl={'this is company content og url '}
        contentKeywords={'this is company contents key word'}
        contentDescription={'this is company content description'}
      />
      Company Profile
    </div>
  )
}

CompanyProfile.layout = Home
