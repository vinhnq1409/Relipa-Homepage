import React from 'react'
import Admin from 'layouts/Admin.js'
<<<<<<< HEAD
=======
// import { useRouter } from 'next/router'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import Pagination from '@material-ui/lab/Pagination'
import FormControl from '@material-ui/core/FormControl'
import Muted from '../../../components/Typography/Muted'
import styles from '../../../styles/Blogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import { TableCell, Table, TableRow, TableBody, Link, TextField, Typography, Button } from '@material-ui/core'
import MomentUtils from '@date-io/moment'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const tableHead = ['No', 'Subject', 'Author', 'Date', 'Status', 'Views', 'Action']
const data = [
  { id: 1, subject: 'subject1', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 2, subject: 'subject2', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
  { id: 3, subject: 'subject3', author: 'Nam', date: '22/04/2022', status: 'public', views: 666 },
]
>>>>>>> 3c5155b (layout-blogs)

export default function Blogs() {
  return (
<<<<<<< HEAD
    <div>
      Blogs
    </div>
=======
    <Container>
      <div className={styles.border}>
        <Typography variant="h6" className={styles.heading}>
          Blogs
        </Typography>
        <form>
          <Grid container>
            <Grid item md={6} className={styles.flex}>
              <Typography className={styles.formLabel}>Subject</Typography>
              <TextField variant="outlined" size="small" />
            </Grid>
            <Grid item md={6} className={styles.flex}>
              <Typography className={styles.formLabel}>Sort by</Typography>
              <Select className={styles.select} variant='outlined' type='select' variant='outlined' size='small' defaultValue="Ascending">
                <MenuItem className={styles.formOption} value="Ascending">Ascending</MenuItem>
                <MenuItem value="Descending">Descending</MenuItem>
              </Select>
            </Grid>
            <Grid item md={6} className={styles.flex}>
              <Typography className={styles.formLabel}>Start</Typography>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker inputVariant="outlined" size='small' />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} className={styles.flex}>
              <Typography className={styles.formLabel}>End</Typography>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker inputVariant="outlined" size='small' />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={12}>
              <Button variant="contained">Search</Button>
              <Button variant="contained">Reset</Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Muted>Total number of records: 80</Muted>
        </Grid>
        <Grid item className={styles.flex}>
          <Muted>Item per page:</Muted>
          <FormControl variant="outlined" size="small">
            <Select className={styles.select} defaultValue="30">
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="50">50</MenuItem>
              <MenuItem value="100">100</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Paper elevation={3} className={styles.tableResponsive}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              {tableHead.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.views}</TableCell>
                <TableCell>
                  <Link className={styles.tableLink} onClick={() => handleView(row.id)}>
                    View
                  </Link>
                  <Link className={styles.tableLink} onClick={() => handleUpdate(row.id)}>
                    Update
                  </Link>
                  <Link className={styles.tableLink} onClick={() => handleDelete(row.id)}>
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Pagination className={styles.center} count={10} />
    </Container>
>>>>>>> 3c5155b (layout-blogs)
  )
}

Blogs.layout = Admin
