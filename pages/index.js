import Link from 'next/link'
import React from 'react'
import { get } from '../api/BaseRequest'
import BlockBanner from '../components/HomePage/Home/BlockBanner'
import BlockNew from '../components/HomePage/Home/BlockNew'
import BlockOutClient from '../components/HomePage/Home/BlockOutClient'
import BlockService from '../components/HomePage/Home/BlockService'
import BlockVoice from '../components/HomePage/Home/BlockVoice'
import LinkContact from '../components/LinkContact'
import useTrans from '../i18n/useTrans'
import HomePage from '../layouts/Home'

export default function Index({ voice, banner, dataBlogs, dataNews }) {
  const trans = useTrans()
  return (
    <HomePage>
      <BlockBanner banner={banner} />
      <div id="main">
        <BlockService />
        <BlockOutClient />
        <BlockVoice voice={voice} />
        <BlockNew dataBlogs={dataBlogs} dataNews={dataNews} />
      </div>
      <div className='contact-home-form'>
        <div className='split-screen'>
        <Link href="/company">
          <a>
            <div>
              <div className="section-contact">
                <div className="main-banner-item main-banner-item-sm img-banner-contact">
                  <div className="main-banner-item-bg background-img-contact ">
                    <picture>
                      <source media="(min-width:768px)" srcSet="user-page/img/company.png" />
                      <source media="(min-width:768px)" srcSet="user-page/img/company.png" />
                      <img src="user-page/img/company.png" width="345" height="188" alt="banner company" />
                    </picture>
                  </div>
                  <div className="container ">
                    <div className="section-contact-shadow">
                      <h2 className="title-contact-name" title={trans.headerFooter.header.company}>
                        {trans.headerFooter.header.company}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        </div>
        <div className='split-screen'>
        <LinkContact/>
        </div>

      </div>
    </HomePage>
  )
}

export async function getServerSideProps(context) {
  const { locale: originalLocale, defaultLocale, req } = context

  const cookies = req.headers.cookie?.slice(-2) || 'en'
  const closestLocale = cookies === 'vi' ? 'vi' : 'en'

  const resDataVoice = await get(`user/${closestLocale}/voice`)
  const voice = (await resDataVoice?.data) || []

  const resDataBanner = await get(`user/${closestLocale}/banner`)
  const banner =
    (await resDataBanner.map((item) => ({
      title: item.title,
      desc: item.desc,
      link: item.link,
      banner: item.banner[0],
    }))) || []

  const dataBlogs = (await get(`user/${closestLocale}/blog`)) || {}
  const dataNews = (await get(`user/${closestLocale}/new`)) || {}

  if ((originalLocale !== defaultLocale || closestLocale !== defaultLocale) && originalLocale !== closestLocale) {
    return {
      redirect: {
        permanent: false,
        destination: `/${closestLocale}`,
      },
      props: {
        voice,
        banner,
        dataBlogs,
        dataNews,
      },
    }
  }

  return {
    props: {
      voice,
      banner,
      dataBlogs,
      dataNews,
    },
  }
}
