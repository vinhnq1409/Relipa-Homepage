/*eslint-disable*/
import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import styles from 'assets/jss/nextjs-material-dashboard/components/homeFooterStyle.js'

export default function Footer(props) {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>
          <span>Copyright &copy; {1900 + new Date().getYear()} RELIPA CO., LTD. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  )
}
