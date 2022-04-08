import React from 'react'
import styles from '../../styles/AdminNewBlogFilters.module.css'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {
  Button,
  Typography,
  Container,
  Grid,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@material-ui/core/'

const NewFilters = ({ handleSearch, filters, setFilters, onCreate }) => {
  const { title, sort } = filters

  return (
    <>
      <Box>
        <Grid spacing={3} container justify='space-between' alignItems='center'>
          <Grid item container spacing={3} alignItems='center' xs={12} md={12} lg={9}>
            <Grid item xs={12} sm={4} md={4} >
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
                    <MenuItem value={'Ascending'}>Ascending</MenuItem>
                    <MenuItem value={'Descending'}>Descending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item spacing={3} xs={12} sm={2} md={4}>
              <Button variant='contained' color='primary' onClick={handleSearch}>
                SEARCH
              </Button>
            </Grid>
          </Grid>

          <Grid item md={2} lg={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' color='primary' onClick={() => onCreate()}>
              CREATE NEW
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default NewFilters
