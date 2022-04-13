import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import Pagination from '@material-ui/lab/Pagination'
import FormControl from '@material-ui/core/FormControl'
import Muted from '../../../components/Typography/Muted'
import styles from '../../../styles/AdminBlogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useEffect, useState } from 'react'

const TableList = ({ tableHead, data, onView, onUpdate, onDelete }) => {
  const [params, setParams] = useState({})
  useEffect(() => {
    setParams({
      page: data.current_page,
      per_page: data.per_page
    })
  }, [data])
  const handleSelectChange = (e) => {
    setParams({ ...params, per_page: e.target.value })
  }
  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
  }
  return (
    <div className={styles.container}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Muted>Total number of records: {data.total}</Muted>
        </Grid>
        <Grid item className={styles.flex}>
          <Muted>Item per page:</Muted>
          <FormControl variant='outlined' size='small'>
            <Select className={styles.select} defaultValue = {params.per_page} onChange={handleSelectChange}>
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
          <TableHead className={styles.tableHead}>
            <TableRow>
              {tableHead.map((item) => (
                <TableCell className={`${styles.tableCell} ${styles.white}`} key={item}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCell}>{row.id}</TableCell>
                <TableCell className={styles.tableCell}>{row.title}</TableCell>
                <TableCell className={styles.tableCell}>{row.meta}</TableCell>
                <TableCell className={styles.tableCell}>{row.created_at}</TableCell>
                <TableCell className={styles.tableCell}>{row.content}</TableCell>
                <TableCell className={styles.tableCell}>{row.url_image_meta}</TableCell>
                <TableCell className={styles.tableCell}>
                  <VisibilityIcon
                    className={`${styles.tableLink} ${styles.hoverIcon}`}
                    onClick={() => onView(row.id)}
                  />
                  <EditIcon className={`${styles.tableLink} ${styles.hoverIcon}`} onClick={() => onUpdate(row.id)} />
                  <DeleteIcon className={`${styles.tableLink} ${styles.hoverIcon}`} onClick={() => onDelete(row.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Pagination className={styles.center} count={10} onChange={handlePaginationChange} />
    </div>
  )
}

export default TableList
