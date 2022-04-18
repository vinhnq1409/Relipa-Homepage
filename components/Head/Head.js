import React from 'react'
import Head from 'next/head'
const HeadHome = ({ title, contentImg, contentDescription, contentOgUrl, contentKeywords, contentTitle }) => {
  return (
    <>
      <Head>
        <meta charset='utf-8' key='title' />
        <meta
          name='description'
          content={
            contentDescription ||
            'Relipa software provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
          key='title'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
          key='title'
        />
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
          key='title'
        />
        <meta
          name='keywords'
          content={contentKeywords || 'Relipa technology, blockchain development company, IT outsourcing'}
          key='title'
        />
        <meta property='og:locale' content='en_GB' key='title' />
        <meta property='og:type' content='website' key='title' />
        <meta property='og:site_name' content='Relipa' key='title' />
        <meta property='og:image:width' content='1200' key='title' />
        <meta property='og:image:height' content='628' key='title' />
        <meta property='og:image:alt' content='blockchain' key='title' />
        <meta property='og:image:type' content='image/jpeg' key='title' />
        <meta property='og:url' content={contentOgUrl || 'https://relipasoft.com/'} key='title' />
        <meta
          property='og:title'
          content={contentTitle || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Relipa Technology'}
          key='title'
        />
        <meta
          property='og:description'
          content={
            contentDescription ||
            'Ekoios provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
          key='title'
        />
        <meta property='og:image' content={contentImg || '/img'} key='title' />
        <meta property='og:image:secure_url' content={contentImg || '/img'} key='title' />
        <meta name='twitter:card' content='summary_large_image' key='title' />
        <meta
          name='twitter:title'
          content={contentTitle || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Relipa Technology'}
          key='title'
        />
        <meta
          name='twitter:description'
          content={
            contentDescription ||
            'Ekoios provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
          key='title'
        />
        <meta name='twitter:image' content={contentImg || '/img'} key='title' />
        <meta name='next-head-count' content='26' key='title' />
        <meta name='google-site-verification' content='JCH9_esCIzO91Wbte9_9Hk5CynW3Ir-TEmZgJUc51wU' key='title' />
        <title>{title || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Ekoios Technology'}</title>
      </Head>
    </>
  )
}

export default HeadHome
