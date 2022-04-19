import React from 'react'
import styles from '../../styles/AdminNewBlogFilters.module.css'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
const NewFilters = ({ handleSearch, filters, setFilters, onCreate }) => {
  const { title, sort } = filters

  return (
    <>
      <Grid container justify='space-between' alignItems='center' spacing={1}>
        <Grid item md={12} lg={10} container spacing={2} alignItems='center'>
          <Grid item>
            <TextField
              placeholder='Search...'
              variant='outlined'
              size='small'
              value={title}
              onChange={(e) => setFilters({ ...filters, title: e.target.value })}
            />
          </Grid>
          <Grid item className={styles.flex}>
            <Typography component='span'>
              Sort by
            </Typography>
            <TextField
              select
              variant='outlined'
              className={styles.sort_by}
              size='small'
              defaultValue=''
              value={sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <MenuItem value={''}>None</MenuItem>
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
        <Grid item lg={2} className={styles.flexRight}>
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            CREATE
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default NewFilters
