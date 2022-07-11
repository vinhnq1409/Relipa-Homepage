import React, { useEffect, useState } from 'react'
import useTrans from '../../i18n/useTrans'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(props) {
  const trans = useTrans()
  const router = useRouter()
  const { locale } = useRouter()
  const [logo, setLogo] = useState(false)

  const isCheckCurrentLink = (url) => {
    return router.pathname === url
  }

  const setCookie = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale};`
  }

  const changeLang = (lang) => {
    setCookie(lang)
    router.push(`${router.asPath}`, `${router.asPath}`, { locale: lang })
  }

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      myFunction()
    }
    const myFunction = () => {
      let desc_object = document.getElementsByClassName('homepage-relipa-global')
      if (document.documentElement.scrollTop > 0) {
        if (desc_object?.length) {
          setLogo(true)
        }
      } else {
        if (desc_object?.length) {
          setLogo(false)
        }else{
          setLogo(true)
        }
      }
    }
  }

  useEffect(() => {
    if (router.pathname === '/') {
      setLogo(false)
    }else{
      setLogo(true)
    }
  }, [])

  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              {/* <span className="logo logo-main"> */}
              {logo ? (
                <img className="fluid" src="/user-page/img/logo.png" width="118" alt="Relipa supports your success" />
                ) : (
                <img
                  className="fluid"
                  src="/user-page/img/logo-white.png"
                  width="118"
                  alt="Relipa supports your success"
                />
              )}
              {/* </span> */}
            </a>
          </Link>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/company">
                  <a className={`nav-link ${isCheckCurrentLink('/company') ? 'active' : ''}`}>
                    {trans.headerFooter.header.company}
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/service">
                  <a
                    className={`nav-link dropdown-toggle ${isCheckCurrentLink('/service') ? 'active' : ''}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {trans.headerFooter.header.service}
                  </a>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/about-service">
                      <a className="dropdown-item">{trans.headerFooter.header.about_service}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/lab-type-development">
                      <a className="dropdown-item">{trans.headerFooter.header.lap_type}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-system-development">
                      <a className="dropdown-item">{trans.headerFooter.header.web_system}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blockchain-development">
                      <a className="dropdown-item">{trans.headerFooter.header.blockchain}</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link href="/products">
                  <a className={`nav-link ${isCheckCurrentLink('/products') ? 'active' : ''}`}>
                    {trans.headerFooter.header.products}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/news">
                  <a className={`nav-link ${isCheckCurrentLink('/news') ? 'active' : ''}`}>
                    {trans.headerFooter.header.news}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs">
                  <a className={`nav-link ${isCheckCurrentLink('/blogs') ? 'active' : ''}`}>
                    {trans.headerFooter.header.blog}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <div className="contact-body cursor-pointer">
                    <span className="text-contact">{trans.headerFooter.header.contact}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="top-right">
            {/* <div className="language-block">
              <a href="#">JP</a>
              <span className="px-2">/ </span>
              <a className="active" href="#">
                EN
              </a>
            </div> */}
            {/* <div className="language-block padding-right-language">
              <a
                className={`cursor ${locale === 'vi' ? 'active' : ''}  ${styles.pointer}`}
                onClick={() => changeLang('vi')}
              >
                VI
              </a>

              <span className="px-2">/ </span>
              <a
                className={`cursor ${locale === 'en' ? 'active' : ''}  ${styles.pointer}`}
                onClick={() => changeLang('en')}
              >
                EN
              </a>
            </div> */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="icon-bar"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
