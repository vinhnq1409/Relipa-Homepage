/*eslint-disable*/
import React from 'react'
import useTrans from '../../i18n/useTrans'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsTelephoneFill } from 'react-icons/bs'
import MessengerCustomerChat from 'react-messenger-customer-chat'

export default function HomeFooter(props) {
  const trans = useTrans()
  const { locales } = useRouter()

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="widget text-center text-lg-start">
              <h2>
                <Link href="/">
                  <a className="footer-logo mb-2" href="#">
                    <img
                      className="fluid"
                      src={require('/public/user-page/img/logo.png')}
                      width="118"
                      height="54"
                      alt="Relipa supports your success"
                    />
                  </a>
                </Link>
              </h2>
              <div className="socials">
                <Link href="https://www.facebook.com/relipasoft">
                  <a className="social-circle enable-hover" aria-label="facebook" target="_blank">
                    <i className="lab la-facebook-f color-black "></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/relipasoft/">
                  <a className="social-circle enable-hover" target="_blank" aria-label="instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCeNpaMMmiR0Aon3m-Gmhd7Q/featured">
                  <a className="social-circle enable-hover" target="_blank" aria-label="youtube">
                    <i className="lab la-youtube-square"></i>
                  </a>
                </Link>
                <Link href="https://twitter.com/relipasoft">
                  <a className="social-circle enable-hover" target="_blank" aria-label="twitter">
                    <i className="lab la-twitter"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">{trans.headerFooter.footer.japan}</h3>
              <div className="widget-content">
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/location.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">{trans.headerFooter.footer.japan_address}</span>
                </div>
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/mobile.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">
                    <a href="tel:+81368049294">(+81)3 6804 9294</a>
                  </span>
                </div>
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/sms.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">
                    {' '}
                    <a href="mailto:sales@relipasoft.com">sales@relipasoft.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">{trans.headerFooter.footer.vietnam}</h3>
              <div className="widget-content">
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/location.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">
                    22nd Floor, B Tower, HH4 Building, Pham Hung Street, Nam Tu Liem District, Ha Noi, Vietnam
                  </span>
                </div>
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/mobile.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">
                    <a href="tel:+842432004725">(+84)24 3200 4725</a>
                  </span>
                </div>
                <div className="text-icon">
                  <span className="text-icon__icon">
                    <img src="/user-page/img/icons/sms.svg" width="24" height="24" alt="" />
                  </span>
                  <span className="text-icon__content">
                    {' '}
                    <a href="mailto:sales@relipasoft.com">sales@relipasoft.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="row">
              <div className={locales[0] === 'en' ? 'col-8' : 'col-6'}>
                <div className="widget">
                  <h3 className="widget-title"> {trans.headerFooter.footer.corporate_information}</h3>
                  <div className="widget-content">
                    <ul className="list-unstyled sidebar-list">
                      <li className="">
                        <Link href="/company">
                          <a>{trans.headerFooter.footer.company_profile}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a>{trans.headerFooter.footer.representative_message}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a>{trans.headerFooter.footer.introducing_core}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a>{trans.headerFooter.footer.mission}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title"> {trans.headerFooter.footer.business}</h3>
                  <div className="widget-content">
                    <ul className="list-unstyled sidebar-list">
                      <li className="">
                        <Link href="/service">
                          <a>{trans.headerFooter.footer.about_service}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/lab-type-development">
                          <a>{trans.headerFooter.footer.lab_type}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/web-system-development">
                          <a>{trans.headerFooter.footer.web_system}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/business-system-development">
                          <a>{trans.headerFooter.footer.business_system}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/blockchain-development">
                          <a>{trans.headerFooter.footer.blockchain}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/smartphone-application-development">
                          <a>{trans.headerFooter.footer.smartphone_application}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title"> {trans.headerFooter.footer.development_results} </h3>
                  <div className="widget-content">
                    <ul className="list-unstyled sidebar-list">
                      <li className="">
                        <Link href="/case-studies">
                          <a>{trans.headerFooter.footer.resources}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/case-studies">
                          <a>{trans.headerFooter.footer.webSystem}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/case-studies">
                          <a>{trans.headerFooter.footer.blockchain}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/case-studies">
                          <a>{trans.headerFooter.footer.smartphone_application}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={locales[0] === 'en' ? 'col-4' : 'col-6'}>
                <div className="widget">
                  <h3 className="widget-title"> {trans.headerFooter.footer.resources}</h3>
                  <div className="widget-content">
                    <ul className="list-unstyled sidebar-list">
                      <li className="">
                        <Link href="/news">
                          <a>{trans.headerFooter.footer.news}</a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/blogs">
                          <a>{trans.headerFooter.footer.blog}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title"> {trans.headerFooter.footer.inquiry} </h3>
                  <div className="widget-content">
                    <ul className="list-unstyled sidebar-list">
                      <li>
                        <Link href="/contact">
                          <a>{trans.headerFooter.footer.inquiry}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy">
                          <a>{trans.headerFooter.footer.privacy_policy}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>Copyright © 2021 RELIPA CO., LTD. All Rights Reserved.</div>
        </div>
      </div>
      {typeof window !== 'undefiend' && <MessengerCustomerChat pageId={process.env.FANPAGE_ID} appId={process.env.APPFB_ID} />}
      <a href="tel:+842432004725">
        <div className="phone-main">
          <div className="phone">
            <span>
              <BsTelephoneFill className="icon-phone" />
            </span>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </a>
    </footer>
  )
}
