import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Home from '../layouts/Home'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})

const PageNotFound = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant='h5' component='h6'>
        Sorry, this page is not available.
      </Typography>
      <Typography variant='subtitle1'>
        The link you followed may be broken, or the page may have been removed.
        <div>
          {' '}
          <a href='/'>Go back to Home</a>
        </div>
      </Typography>
    </Box>
  )
}
export default PageNotFound

PageNotFound.layout = Home
