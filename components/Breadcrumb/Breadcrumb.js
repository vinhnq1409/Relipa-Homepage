import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/Breadcrumb.module.css'

export default function Breadcrumb(props) {
  // used for checking current route
  const router = useRouter()
  const routerPath = router.pathname.split('/')

  function convertLink(routerPath) {
    let linkRouterArray = []
    linkRouterArray = routerPath.map((item) => {
      return {
        name: item,
        link: item
      }
    })
    for (let i = 1; i < linkRouterArray.length; i++) {
      linkRouterArray[i].link = linkRouterArray[i - 1].link + '/' + linkRouterArray[i].link
    }
    linkRouterArray.shift()
    if (linkRouterArray.length <= 1) {
      return []
    } else {
      return linkRouterArray
    }
  }
  const BreadcrumbLink = convertLink(routerPath)

  // create styles for this component
  function makeBrand() {
    let name = 'Relipa Dashboard'
    props.routes.map((prop) => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name
      }
      return null
    })
    return name
  }

  return (
    <div className={styles.breadcrumbs}>
      <Typography className={styles.breadcrumbs_title} variant='h6'>
        {makeBrand()}
      </Typography>
      <Breadcrumbs separator='›' maxItems={3} className={styles.breadcrumbs}>
        {BreadcrumbLink.map((item, index) =>
          index + 1 === BreadcrumbLink.length ? (
            <Typography key={index}> {item.name}</Typography>
          ) : (
            <Link href={item.link} key={index}>
              <a className={styles.breadcrumbs_link}>{item.name}</a>
            </Link>
          )
        )}
      </Breadcrumbs>
    </div>
  )
}
