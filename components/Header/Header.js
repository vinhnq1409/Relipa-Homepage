/*eslint-disable*/
import React from 'react'
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
// core components
import styles from 'assets/jss/nextjs-material-dashboard/components/headerHomeStyle'
// import logo from '../../public/user-page/img/logo.png'
import logo from '../../public/user-page/img/logo.png'

export default function Header(props) {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return (
    <>
      <header id='header'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <a className='navbar-brand' href='index.html'>
              <span className='logo logo-main'>
                <img className='fluid' src={logo} width='118' height='54' alt='Relipa supports your success' />
              </span>
            </a>
            <div className='collapse navbar-collapse' id='main-nav'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='company.html'>
                    COMPANY
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='business.html'>
                    BUSINESS
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
                    SERVICE
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <a className='dropdown-item' href='service.html'>
                        About Service
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='lab-type-development.html'>
                        Lab-type Development
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='project-1.html'>
                        Web System Development
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='project-2.html'>
                        Business System Development
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='project-1.html'>
                        Blockchain Development
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='project-2.html'>
                        Smartphone Application Development
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='culture.html'>
                    CASE STUDIES
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='environment.html'>
                    NEWS
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='qna.html'>
                    BLOG
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='culture.html'>
                    CONTACT
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
    </>
  )
}
