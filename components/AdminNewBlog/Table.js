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
import noData from '../../assets/img/no-data-found.png'
import { Dialogs } from '../Progress/Dialog'
import { Button, Checkbox } from '@material-ui/core'

const TableList = (props) => {
  const { 
    namePage, 
    tableHead, 
    data, 
    onUpdate, 
    onDelete, 
    params, 
    setParams, 
    count, 
    handleCheckbox 
  } = props
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
                <TableCell>{row.lang}</TableCell>
                <TableCell className={styles.minWidth72}>{row.created_at?.slice(0, 10)}</TableCell>
                <TableCell>{row.status ? 'Public' : 'Private'}</TableCell>
                <TableCell>
                  <Checkbox
                    color="primary"
                    defaultChecked={!!row.top}
                    onChange={() => {
                      handleCheckbox(row)
                    }}
                  />
                </TableCell>
                <TableCell>{row.total_view}</TableCell>
                <TableCell className={styles.flex2}>
                  <a target="_blank" href={`${namePage}/${row.friendly_url}`} rel="noreferrer">
                    <VisibilityIcon className={`${styles.tableLink} ${styles.hoverIcon}`} />
                  </a>
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
        {data?.length === 0 && <img style={{ backgroundImage: 'none' }} src={noData} alt="No Data ..." />}
      </div>
      <Dialogs
        open={openConfirmDelete}
        handleCancel={handleClose}
        title="Delete"
        content="Do you really want to delete this?"
        onClick={handleDelete}
      />
      {count > 1 && (
        <Pagination
          className={styles.center}
          count={Math.ceil(count)}
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
