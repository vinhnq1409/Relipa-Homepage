import React from 'react'
import Home from '../../layouts/Home'
import Head from 'next/head'

export default function Blogs() {
  const contentDescription = 'abc'
  return (
    <div>
      <Head>
        <meta
          name='description'
          content={
            contentDescription ||
            'Relipa software provides excellent IT outsourcing services in Blockchain Development Services - AI Technology - Web Mobile Application - White Label Blockchain Solutions'
          }
          key='title'
        />
      </Head>
      Blogs
    </div>
  )
}

Blogs.layout = Home
