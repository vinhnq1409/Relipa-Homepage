import React, { useEffect, useState } from 'react'
import useTrans from '../../i18n/useTrans'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkContact() {
  const trans = useTrans()

  return (
    <Link href="/contact">
      <a>
        <div>
          <div className="section-contact">
            <div className="main-banner-item main-banner-item-sm img-banner-contact">
              <div className="main-banner-item-bg background-img-contact ">
                <picture>
                  <source media="(min-width:768px)" srcSet="user-page/img/contact.png" />
                  <source media="(min-width:768px)" srcSet="user-page/img/contact.png" />
                  <img src="user-page/img/contact.png" width="345" height="188" alt="banner company" />
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
