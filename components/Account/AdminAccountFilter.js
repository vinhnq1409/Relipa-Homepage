import React from 'react'
import styles from '../../styles/AdminNewBlogFilters.module.css'
import { Button, Typography, TextField, MenuItem } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import useTrans from '../../i18n/useTrans'

const AccountFilter = ({ handleSearch, filters, setFilters, onCreate }) => {
  const { email, sort } = filters
  const trans = useTrans()

  return (
    <>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item md={10} container spacing={2} alignItems='center'>
          <Grid item>
            <TextField
              placeholder='Search...'
              variant='outlined'
              size='small'
              value={email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            />
          </Grid>
          <Grid item className={styles.flex}>
            <Typography variant='subtitle2' component='span'>
              Sort by
            </Typography>
            <TextField select variant='outlined' className={styles.sort_by} size='small' defaultValue='' value={sort}>
              <MenuItem value={'asc'}>Ascending</MenuItem>
              <MenuItem value={'desc'}>Descending</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={handleSearch}>
              {trans.admin_account.search}
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={12} md={2} className={styles.flexRight}>
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            {trans.admin_account.create_account}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default AccountFilter
