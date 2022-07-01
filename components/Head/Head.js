import React from 'react'
import Head from 'next/head'

const HeadHome = ({ title, contentImg, contentDescription, contentOgUrl, contentKeywords, contentTitle }) => {
  return (
    <>
      <Head>
        <title>{title || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Ekoios Technology'}</title>
        <meta
          property='description'
          content={
            contentDescription ||
            'Relipa software provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
        />
        <meta
          property='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
        />
        <meta
          property='keywords'
          content={contentKeywords || 'Relipa technology, blockchain development company, IT outsourcing'}
        />
        <meta property='og:locale' content='en_GB' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Relipa' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />
        <meta property='og:image:alt' content='blockchain' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:url' content={contentOgUrl || 'https://relipasoft.com/'} />
        <meta
          property='og:title'
          content={contentTitle || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Relipa Technology'}
        />
        <meta
          property='og:description'
          content={
            contentDescription ||
            'Ekoios provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
        />
        <meta property='og:image' content={contentImg || '/img'} />
        <meta property='og:image:secure_url' content={contentImg || '/img'} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:title'
          content={contentTitle || 'Leading Vietnam’s Blockchain &amp; AI Development Company - Relipa Technology'}
        />
        <meta
          property='twitter:description'
          content={
            contentDescription ||
            'Ekoios provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
        />
        <meta property='twitter:image' content={contentImg || '/img'} />
        <meta property='next-head-count' content='26' />
        <meta name='google-site-verification' content='aEcygQCLY-in4GgZ5Wbay7XAM25GhbbS8pv6W5PCtk0' />
      </Head>
    </>
  )
}

export default HeadHome
