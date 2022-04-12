import { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import styles from '../../styles/AdminBlogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

const TableList = ({ tableHead, data, onView, onUpdate, onDelete, params, setParams }) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const handleOpen = (id) => {
    setOpenConfirmDelete(true)
    setDeleteId(id)
  }
  const handleClose = () => {
    setOpenConfirmDelete(false)
  }

  const handleDelete = () => {
    onDelete(deleteId)
    handleClose()
  }

  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableResponsive}>
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
            {data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCell}>{row.id}</TableCell>
                <TableCell className={styles.tableCell}>{row.title}</TableCell>
                <TableCell className={styles.tableCell}>{row.author}</TableCell>
                <TableCell className={styles.tableCell}>{row.date}</TableCell>
                <TableCell className={styles.tableCell}>{row.status}</TableCell>
                <TableCell className={styles.tableCell}>{row.views}</TableCell>
                <TableCell className={`${styles.tableCell} ${styles.flex2}`}>
                  <VisibilityIcon
                    className={`${styles.tableLink} ${styles.hoverIcon}`}
                    onClick={() => onView(row.id)}
                  />
                  <EditIcon className={`${styles.tableLink} ${styles.hoverIcon}`} onClick={() => onUpdate(row.id)} />
                  <DeleteIcon
                    className={`${styles.tableLink} ${styles.hoverIcon}`}
                    onClick={() => handleOpen(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={openConfirmDelete} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <Typography>Do you really want to delete this?</Typography>
          <DialogActions>
            <Button onClick={handleDelete} variant='contained' color='secondary'>
              Yes
            </Button>
            <Button onClick={handleClose} variant='contained'>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Pagination className={styles.center} count={1} onChange={handlePaginationChange} />
    </div>
  )
}

export default TableList
