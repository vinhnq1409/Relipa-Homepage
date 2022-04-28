/*eslint-disable*/
import React from 'react'
import useTrans from '../../i18n/useTrans'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(props) {
  const trans = useTrans()
  const router = useRouter()
  const { locale } = useRouter()

  const isCheckCurrentLink = (url) => {
    return router.pathname === url
  }

  const changeLang = (lang) => {
    router.push(`${router.pathname}`, `${router.pathname}`, { locale: lang })
  }

  return (
    <header id='header'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand'>
              <span className='logo logo-main'>
                <img
                  className='fluid'
                  src='/user-page/img/logo.png'
                  width='118'
                  height='54'
                  alt='Relipa supports your success'
                />
              </span>
            </a>
          </Link>
          <div className='collapse navbar-collapse' id='main-nav'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link href='/company'>
                  <a className={`nav-link ${isCheckCurrentLink('/company') ? 'active' : ''}`}>
                    {trans.headerFooter.header.company}
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/business'>
                  <a className={`nav-link ${isCheckCurrentLink('/business') ? 'active' : ''}`}>
                    {trans.headerFooter.header.business}
                  </a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link href='/service'>
                  <a
                    className={`nav-link dropdown-toggle ${isCheckCurrentLink('/service') ? 'active' : ''}`}
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {trans.headerFooter.header.service}
                  </a>
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link href='/service'>
                      <a className='dropdown-item'>{trans.headerFooter.header.about_service}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/lab-type-development'>
                      <a className='dropdown-item'>{trans.headerFooter.header.lap_type}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/web-system-development'>
                      <a className='dropdown-item'>{trans.headerFooter.header.web_system}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/business-system-development'>
                      <a className='dropdown-item'>{trans.headerFooter.header.business_system}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blockchain-development'>
                      <a className='dropdown-item'>{trans.headerFooter.header.blockchain}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/smartphone-application-development'>
                      <a className='dropdown-item'>{trans.headerFooter.header.smartphone_application}</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link href='/case-student'>
                  <a className={`nav-link ${isCheckCurrentLink('/case-studies') ? 'active' : ''}`}>
                    {trans.headerFooter.header.case_studies}
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/news'>
                  <a className={`nav-link ${isCheckCurrentLink('/news') ? 'active' : ''}`}>
                    {trans.headerFooter.header.news}
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className={`nav-link ${isCheckCurrentLink('/blog') ? 'active' : ''}`}>
                    {trans.headerFooter.header.blog}
                  </a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link href='/contact'>
                  <a className={`nav-link ${isCheckCurrentLink('/contact') ? 'active' : ''}`}>
                    {trans.headerFooter.header.contact}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='top-right'>
            {/* <div className='language-block'>
              <a href='#'>JP</a>
              <span className='px-2'>/ </span>
              <a className='active' href='#'>
                EN
              </a>
            </div> */}
            <div className='language-block'>
              <a className={`cursor ${locale === 'japan' ? 'active' : ''}`} onClick={() => changeLang('ja')}>
                JP
              </a>

              <span className='px-2'>/ </span>
              <a className={`cursor ${locale === 'en' ? 'active' : ''}`} onClick={() => changeLang('en')}>
                EN
              </a>
            </div>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#main-nav'
              aria-controls='main-nav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='icon-bar'></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
