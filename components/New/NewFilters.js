import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
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
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  filters: {
    marginTop: "23px",
    border: "1px solid",
    position: "relative",
    marginTop: "30px",
    padding: "20px 10px 30px 10px",
  },

  filters_title: {
    position: "absolute",
    top: "-17px",
    background: "#eeeeee",
    minWidth: "70px",
    textAlign: "center",
  },

  filters_row1: {
    justifyContent: "center",
    marginTop: "4px",
    marginBottom: "20px",
  },

  sort_by: {
    minWidth: 150,
  },
});

const NewFilters = ({ header }) => {
  const styles = useStyles();
  
  const [subject, setSubject] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [startDay, handleStartDay] = useState(null);
  const [selectedDate, handleDateEndDay] = useState(null);

  const handleResetForm = () => {
    setSubject('')
    setSortBy('')
    handleStartDay(null)
    handleDateEndDay(null)
  }
  return (
    <>
      <Container>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary">
            CREATE NEW
          </Button>
        </div>

        <Box className={styles.filters}>
          <Container component='form'>
            <Typography className={styles.filters_title} variant="h5">
              {header}
            </Typography>
            <Box>
              <Grid
                className={styles.filters_row1}
                container
                spacing={3}
                alignItems="center"
              >
                <Grid item xs={4} sm={1}>
                  <Typography>Subject</Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                  <FormControl>
                    <TextField
                      id="outlined-secondary"
                      label="Search something"
                      variant="outlined"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={1}>
                  <Typography>Sort By</Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                  <FormControl className={styles.sort_by} variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Sort By
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Sort By"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <MenuItem value={"Ascending"}>Ascending</MenuItem>
                      <MenuItem value={"Descending"}>Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid
                className={styles.filters_row1}
                container
                spacing={3}
                alignItems="center"
              >
                <Grid item xs={4} sm={1}>
                  <Typography>Start Day</Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                  <FormControl>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        label="Start Day"
                        inputVariant="outlined"
                        value={startDay}
                        onChange={handleStartDay}
                        format="yyyy/MM/DD"
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={1}>
                  <Typography>End Day</Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                  <FormControl variant="outlined">
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        label="End Day"
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateEndDay}
                        format="yyyy/MM/DD"
                        minDate={moment(startDay).format('yyyy/MM/DD')}
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={8} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    SEARCH
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    type="reset" 
                    variant="contained" 
                    color="primary" 
                    onClick={handleResetForm}
                  >
                    RESET
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default NewFilters;
