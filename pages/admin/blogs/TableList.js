import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import Pagination from '@material-ui/lab/Pagination'
import FormControl from '@material-ui/core/FormControl'
import Muted from '../../../components/Typography/Muted'
import styles from '../../../styles/AdminBlogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import { TableCell, Table, TableRow, TableBody, Link } from '@material-ui/core'

const TableList = ({ tableHead, data, onView, onUpdate, onDelete, params, setParams }) => {
  const handleSelectChange = (e) => {
    setParams({ ...params, per_page: e.target.value })
  }

  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
  }

  return (
    <>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Muted>Total number of records: {data.length}</Muted>
        </Grid>
        <Grid item className={styles.flex}>
          <Muted>Item per page:</Muted>
          <FormControl variant='outlined' size='small'>
            <Select className={styles.select} defaultValue={params.per_page} onChange={handleSelectChange}>
              <MenuItem value='10'>10</MenuItem>
              <MenuItem value='30'>30</MenuItem>
              <MenuItem value='50'>50</MenuItem>
              <MenuItem value='100'>100</MenuItem>
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
                  <Link className={styles.tableLink} onClick={() => onView(row.id)}>
                    View
                  </Link>
                  <Link className={styles.tableLink} onClick={() => onUpdate(row.id)}>
                    Update
                  </Link>
                  <Link className={styles.tableLink} onClick={() => onDelete(row.id)}>
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Pagination className={styles.center} count={10} onChange={handlePaginationChange} />
    </>
  )
}

export default TableList
