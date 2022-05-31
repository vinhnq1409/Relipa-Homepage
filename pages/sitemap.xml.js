import React from 'react'
import { get } from '../api/BaseRequest'

const Sitemap = () => {}

export const getServerSideProps = async ({ res }) => {
  const resDataSitemap = await get('sitemap')

  const textSitemap = resDataSitemap.url.map((item) => `<url>
  <loc>${item.loc}</loc>
  <changefreq>${item.changefreq}</changefreq>
  <priority>${item.priority}</priority>
  <lastmod>${item.lastmod}</lastmod>
  </url>`).join('').replace(/&/g, '&amp;')
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${textSitemap}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
