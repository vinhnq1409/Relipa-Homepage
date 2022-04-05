import React from 'react'
import Admin from 'layouts/Admin.js'
import useTrans from '../../i18n/useTrans'
import { useRouter } from 'next/router'

export default function Blogs() {
  const trans = useTrans()
  const router = useRouter()
  const changeLang = (lang) => {
    router.push('/', '/', { locale: lang })
  }

  return (
    <div>
      Blogs
      {/* demo change language */}
      <p> {trans.language.language}</p>
      <button onClick={() => changeLang('vi')}>vi</button>
      <button onClick={() => changeLang('en')}>en</button>
      {/* demo change language */}
    </div>
  )
}

Blogs.layout = Admin
