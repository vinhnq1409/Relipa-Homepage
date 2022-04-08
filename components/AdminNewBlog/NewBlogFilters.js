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

const NewFilters = ({
  header,
  handleSearch,
  handleResetForm,
  filters,
  setFilters
}) => {
  const { subject, sortBy, startDay, endDay } = filters

  return (
    <>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary'>
            CREATE NEW
          </Button>
        </div>

        <Box className={styles.filters}>
          <Container component='form'>
            <Typography className={styles.filters_title} variant='h5'>
              {header}
            </Typography>
            <Box className={styles.filters_box1}>
              <Grid className={styles.filters_row1} container spacing={3} alignItems='center'>
                <Grid item xs={4} sm={1}>
                  <Typography>Subject</Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                  <FormControl>
                    <TextField
                      id='outlined-secondary'
                      label='Search something'
                      variant='outlined'
                      value={subject}
                      onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={1}>
                  <Typography>Sort By</Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                  <FormControl variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>Sort By</InputLabel>
                    <Select
                      className={styles.sort_by}
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      label='Sort By'
                      value={sortBy}
                      onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    >
                      <MenuItem value={'Ascending'}>Ascending</MenuItem>
                      <MenuItem value={'Descending'}>Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box className={styles.filters_box2}>
              <Grid className={styles.filters_row1} container spacing={3} alignItems='center'>
                <Grid item xs={4} sm={1}>
                  <Typography>Start Day</Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                  <FormControl>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        label='Start Day'
                        inputVariant='outlined'
                        value={startDay}
                        onChange={(e) => setFilters({
                          ...filters,
                          startDay: e.format('yyyy/MM/DD')
                        })}
                        format='yyyy/MM/DD'
                        maxDate={endDay}
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={1}>
                  <Typography>End Day</Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                  <FormControl variant='outlined'>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        label='End Day'
                        inputVariant='outlined'
                        value={endDay}
                        onChange={(e) => setFilters({
                          ...filters,
                          endDay: e.format('yyyy/MM/DD')
                        })}
                        format='yyyy/MM/DD'
                        minDate={startDay === null ? undefined : startDay}
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={8} justify='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSearch}
                  >
                    SEARCH
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary' onClick={handleResetForm}>
                    RESET
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  )
}

export default NewFilters
