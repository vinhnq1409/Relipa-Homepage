import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Home from '../layouts/Home'

const useStyles = makeStyles({
  root: {
    height: '68vh',
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
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h5" component="h6">
        Sorry, this page is not available.
      </Typography>
      <Typography variant="subtitle1">
          <a href="/">Go back to Home</a>
      </Typography>
    </Box>
  )
}

export default PageNotFound
PageNotFound.layout = Home
