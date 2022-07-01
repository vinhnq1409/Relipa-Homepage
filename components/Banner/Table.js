import { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import styles from '../../styles/AdminBlogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import noData from '../../assets/img/no-data-found.png'
import { Dialogs } from '../Progress/Dialog'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

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
    handleNumericalOrder,
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
                <TableCell className={styles.max68}>
                  <div style={{ backgroundImage: `url(${row.banner[0]})` }} className={styles.width68}></div>
                </TableCell>
                <TableCell>{row.lang}</TableCell>
                <TableCell className={styles.minWidth72}>{row.created_at?.slice(0, 10)}</TableCell>
                <TableCell>{row.status ? 'Public' : 'Private'}</TableCell>
                <TableCell>
                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Order</InputLabel>
                    <Select
                      defaultValue={row.numerical_order || 0}
                      value={row.numerical_order || 0}
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) =>
                        handleNumericalOrder({ id: row.id, numerical_order: e.target.value !== 0 ? e.target.value : '', lang: row.lang })
                      }
                      label="Lang"
                      style={{ minWidth: 168 }}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell className={styles.flex2}>
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
