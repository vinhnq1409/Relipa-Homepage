import React from 'react'
import Admin from 'layouts/Admin.js'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Container, Grid, Box } from '@material-ui/core'
import NewFilters from '../../components/New/NewFilters'

const useStyles = makeStyles({
  create__new: {
    float: 'right',
  },
})

export default function News() {
  const styles = useStyles()
  return (
    <div className="new">
      <NewFilters header={'NEW'} />
    </div>
  )
}

News.layout = Admin
