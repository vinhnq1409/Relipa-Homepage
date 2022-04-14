import React from 'react'
import styles from '../../styles/AdminNewBlogFilters.module.css'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const AccountFilter = ({ handleSearch, filters, setFilters, onCreate }) => {
  const { email, sort } = filters

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
              SEARCH
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={12} md={2} className={styles.flexRight}>
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            CREATE
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default AccountFilter
