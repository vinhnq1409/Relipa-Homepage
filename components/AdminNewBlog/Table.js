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
import noData from '../../assets/img/no-data-found.png'

const TableList = ({ tableHead, data, onView, onUpdate, onDelete, params, setParams, count }) => {
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
                <TableCell className={styles.white} key={item}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.views}</TableCell>
                <TableCell className={styles.flex2}>
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
        {data?.length === 0 && <img style={{ backgroundImage: 'none' }} src={noData} alt='No Data ...' />}
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
      {count > 1 && (
        <Pagination
          className={styles.center}
          count={Math.round(count)}
          onChange={handlePaginationChange}
          showFirstButton
          showLastButton
          page={params.page}
        />
      )}
    </div>
  )
}

export default TableList
