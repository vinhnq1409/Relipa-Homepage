import {
  Grid,
  MenuItem,
  Paper,
  Select,
  FormControl,
  TableHead,
  TableCell,
  Table,
  TableRow,
  TableBody
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import Muted from '../../../components/Typography/Muted'
import styles from '../../../styles/AdminBlogs.module.css'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from 'react'
import useTrans from '../../../i18n/useTrans'

const TableListAdmin = ({ tableHead, data, onView, onUpdate, onDelete }) => {
  const trans = useTrans()
  const [params, setParams] = useState({})
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
          <Muted>
            {trans.admin_account.total_user}: {data?.length}
          </Muted>
        </Grid>
        <Grid item className={styles.flex}>
          <Muted>{trans.admin_account.item_per_page}:</Muted>
          <FormControl variant='outlined' size='small'>
            <Select className={styles.select} defaultValue={10} onChange={handleSelectChange}>
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
            {Array.isArray(data) && data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCell}>{row.id}</TableCell>
                <TableCell className={styles.tableCell}>{row.name}</TableCell>
                <TableCell className={styles.tableCell}>{row.email}</TableCell>
                <TableCell className={styles.tableCell}>{row?.roles[0]?.title}</TableCell>
                <TableCell className={styles.tableCell}>{row?.created_at?.slice(0, 10)}</TableCell>
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

export default TableListAdmin
