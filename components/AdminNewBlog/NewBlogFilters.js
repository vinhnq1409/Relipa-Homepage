import React, { useState } from 'react'
import styles from './AdminNewBlog.module.css'
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

const NewFilters = ({ header, handleSearch }) => {
  const [subject, setSubject] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [startDay, handleStartDay] = useState(null)
  const [endDay, handleDateEndDay] = useState(null)

  const handleResetForm = () => {
    setSubject('')
    setSortBy('')
    handleStartDay(null)
    handleDateEndDay(null)
  }

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
            <Box>
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
                      onChange={(e) => setSubject(e.target.value)}
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
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <MenuItem value={'Ascending'}>Ascending</MenuItem>
                      <MenuItem value={'Descending'}>Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box>
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
                        onChange={handleStartDay}
                        format='yyyy/MM/DD'
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
                        onChange={handleDateEndDay}
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
                    onClick={() => handleSearch(subject, sortBy, startDay, endDay)}
                  >
                    SEARCH
                  </Button>
                </Grid>
                <Grid item>
                  <Button type='reset' variant='contained' color='primary' onClick={handleResetForm}>
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
