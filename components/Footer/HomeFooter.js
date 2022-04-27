/*eslint-disable*/
import React from 'react'
import useTrans from '../../i18n/useTrans'
import { useRouter } from 'next/router'

export default function HomeFooter(props) {
  const trans = useTrans()
  const { locales } = useRouter()

  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='widget text-center text-lg-start'>
              <h2>
                <a className='footer-logo mb-2' href='#'>
                  <img
                    className='fluid'
                    src={require('/public/user-page/img/logo.png')}
                    width='118'
                    height='54'
                    alt='Relipa supports your success'
                  />
                </a>
              </h2>
              <div className='socials'>
                <a className='social-circle' href='#' aria-label='facebook'>
                  <i className='lab la-facebook-f'></i>
                </a>
                <a className='social-circle' href='#' aria-label='instagram'>
                  <i className='lab la-instagram'></i>
                </a>
                <a className='social-circle' href='#' aria-label='youtube'>
                  <i className='lab la-youtube-square'></i>
                </a>
                <a className='social-circle' href='#' aria-label='twitter'>
                  <i className='lab la-twitter'></i>
                </a>
              </div>
            </div>
            <div className='widget'>
              <h3 className='widget-title'>{trans.user.footer.japan}</h3>
              <div className='widget-content'>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/location.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>
                    {trans.user.footer.japan_address}
                  </span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/mobile.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>(+81)3 6804 9294</span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/sms.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>sales@relipasoft.com</span>
                </div>
              </div>
            </div>
            <div className='widget'>
              <h3 className='widget-title'>{trans.user.footer.vietnam}</h3>
              <div className='widget-content'>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/location.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>
                    22nd Floor, B Tower, HH4 Building, Pham Hung Street, Nam Tu Liem District, Ha Noi, Vietnam
                  </span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/mobile.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>(+84)24 3200 4725</span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/sms.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>sales@relipasoft.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <div className='row'>
              <div className={(locales[0]==='en') ? 'col-8': 'col-6'}>
                <div className='widget'>
                  <h3 className='widget-title'> {trans.user.footer.corporate_information}</h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>{trans.user.footer.company_profile}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.representative_message}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.introducing_core}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.mission}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> {trans.user.footer.business}</h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>{trans.user.footer.about_service}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.lab_type}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.web_system}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.business_system}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.blockchain}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.smartphone_application}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> {trans.user.footer.development_results} </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>{trans.user.footer.resources}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.webSystem}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.blockchain}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.smartphone_application}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={(locales[0]==='en') ? 'col-4': 'col-6'}>
                <div className='widget'>
                  <h3 className='widget-title'> {trans.user.footer.resources}</h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>{trans.user.footer.news}</a>
                      </li>
                      <li className=''>
                        <a href='#'>{trans.user.footer.blog}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> {trans.user.footer.inquiry} </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li>
                        <a href='#'>{trans.user.footer.inquiry}</a>
                      </li>
                      <li>
                        <a href='#'>{trans.user.footer.privacy_policy}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div>Copyright © 2021 RELIPA CO., LTD. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
