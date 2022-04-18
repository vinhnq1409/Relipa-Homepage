/*eslint-disable*/
import React from 'react'
import Link from 'next/link'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
// core components
import styles from 'assets/jss/nextjs-material-dashboard/components/headerHomeStyle'
import HeadHome from '../Head/Head'

export default function Header(props) {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return (
    <>
      <header>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <Link href='/'>
              <a className={classes.block}>Home</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/company-profile'>
              <a className={classes.block}>Company</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/news'>
              <a className={classes.block}>News</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/blogs'>
              <a className={classes.block}>Blogs</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/our-work'>
              <a className={classes.block}>our-work</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/contact'>
              <a className={classes.block}> Contact</a>
            </Link>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <Link href='/admin'>
              <a className={classes.block}>Admin Test</a>
            </Link>
          </ListItem>
        </List>
      </header>
    </>
  )
}
