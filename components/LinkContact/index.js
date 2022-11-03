import React from 'react'
import Link from 'next/link'
import useTrans from '../../i18n/useTrans'

const LinkContact = () => {
  const trans = useTrans()

  return (
    <Link href="/contact">
      <a>
        <div>
          <div className="section-contact">
            <div className="main-banner-item main-banner-item-sm img-banner-contact">
              <div className="main-banner-item-bg background-img-contact ">
                <picture>
                  <source media="(min-width:768px)" srcSet="/user-page/img/contact.jpeg" />
                  <source media="(min-width:768px)" srcSet="/user-page/img/contact.jpeg" />
                  <img src="/user-page/img/contact.jpeg" width="345" height="188" alt="banner company" />
                </picture>
              </div>
              <div className="container ">
                <div className="section-contact-shadow">
                  <h2 className="title-contact-name" title={trans.headerFooter.header.contact}>
                    {trans.headerFooter.header.contact}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default LinkContact
