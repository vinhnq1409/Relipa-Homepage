/*eslint-disable*/
import React from 'react'
import useTrans from '../../i18n/useTrans'

export default function Header(props) {
  const trans = useTrans()

  return (
    <header id='header'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <span className='logo logo-main'>
              <img className='fluid' src='/user-page/img/logo.png' width='118' height='54' alt='Relipa supports your success' />
            </span>
          </a>
          <div className='collapse navbar-collapse' id='main-nav'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='company.html'>
                  {trans.user.header.company}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='business.html'>
                  {trans.user.header.business}
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='service.html'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {trans.user.header.service}
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='service.html'>
                      {trans.user.header.about_service}
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='lab-type-development.html'>
                      {trans.user.header.lap_type}
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='project-1.html'>
                      {trans.user.header.web_system}
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='project-2.html'>
                      {trans.user.header.business_system}
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='project-1.html'>
                      {trans.user.header.blockchain}
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='project-2.html'>
                      {trans.user.header.smartphone_application}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link' href='culture.html'>
                  {trans.user.header.case_student}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='environment.html'>
                  {trans.user.header.news}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='qna.html'>
                  {trans.user.header.blog}
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link' href='culture.html'>
                  {trans.user.header.contact}
                </a>
              </li>
            </ul>
          </div>
          <div className='top-right'>
            <div className='language-block'>
              <a href='#'>JP</a>
              <span className='px-2'>/ </span>
              <a className='active' href='#'>
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
