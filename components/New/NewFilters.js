import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
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

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from "moment";

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

  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const [selectedDate, handleDateChange] = useState(moment(new Date()).format('yyyy/mm/dd'));

  return (
    <>
      <Container>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary">
            CREATE NEW
          </Button>
        </div>
        <Box className={styles.filters}>
          <Container>
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
                    <TextField
                      id="start"
                      label="Start Day"
                      type="date"
                      defaultValue="2022-05-04"
                      variant="outlined"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={1}>
                  <Typography>End Day</Typography>
                </Grid>
                <Grid item xs={8} sm={3}>
                  <FormControl variant="outlined" >
                    {/* <TextField 
                      id="end" 
                      label="End Day" 
                      type="date" 
                      defaultValue="2022-05-04" 
                      variant="outlined" 
                      disabled={disabledDate} 
                    /> */}
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        variant="outlined" 
                        value={selectedDate}
                        onChange={handleDateChange}
                        minDate={'2022-05-04'}
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
                  <Button variant="contained" color="primary">
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
