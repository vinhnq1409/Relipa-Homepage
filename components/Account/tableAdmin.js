import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import styles from '../../styles/AdminBlogs.module.css'
import { TableHead, TableCell, Table, TableRow, TableBody } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import noData from '../../assets/img/no-data-found.png'

const TableList = ({ tableHead, data, onView, onUpdate, onDelete, params, setParams, count }) => {
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.roles[0].title}</TableCell>
                <TableCell>{row.created_at?.slice(0, 10)}</TableCell>
                <TableCell>{row.updated_at?.slice(0, 10)}</TableCell>
                <TableCell className={styles.flex2}>
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
        {data?.length === 0 && <img style={{ backgroundImage: 'none' }} src={noData} alt='No Data ...' />}
      </div>
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
