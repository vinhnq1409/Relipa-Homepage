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
      <Grid container justify='space-between' alignItems='center'>
        <Grid item md={10} container spacing={2} alignItems='center'>
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
            <Typography variant='subtitle2' component='span'>
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
        <Grid item sm={12} md={2} className={styles.flexRight}>
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            CREATE
          </Button>
        </Grid>
      </Grid>
      {/* <Grid spacing={3} container justify='space-between' alignItems='center'>
        <Grid item container spacing={3} alignItems='center' xs={12} md={12} lg={9}>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl>
              <TextField
                id='outlined-secondary'
                label='Search...'
                variant='outlined'
                value={title}
                onChange={(e) => setFilters({ ...filters, title: e.target.value })}
              />
            </FormControl>
          </Grid>

          <Grid spacing={3} item container xs={12} sm={6} md={4} alignItems='center'>
            <Grid item xs={3} sm={4} md={3}>
              <Typography>Sort By</Typography>
            </Grid>
            <Grid item xs={7} md={6}>
              <FormControl variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>Sort By</InputLabel>
                <Select
                  className={styles.sort_by}
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  label='Sort By'
                  value={sort}
                  onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                >
                  <MenuItem value={''}>None</MenuItem>
                  <MenuItem value={'asc'}>Ascending</MenuItem>
                  <MenuItem value={'desc'}>Descending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2} md={4}>
            <Button variant='contained' color='primary' onClick={handleSearch}>
              SEARCH
            </Button>
          </Grid>
        </Grid>

        <Grid item md={2} lg={2} >
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            CREATE NEW
          </Button>
        </Grid>
      </Grid> */}
    </>
  )
}

export default NewFilters
