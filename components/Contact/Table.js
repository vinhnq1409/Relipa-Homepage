import Pagination from '@material-ui/lab/Pagination'
import styles from '../../styles/AdminBlogs.module.css'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import noData from '../../assets/img/no-data-found.png'

const TableList = (props) => {
  const { 
    tableHead, 
    data, 
    params, 
    setParams, 
    count, 
  } = props
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
                <TableCell>
                  Name: {row.name} <br />
                  Company: {row.company_name} <br />
                  Email: <a href={`mailto:${row.email}`}>{row.email}</a><br />
                  Phone: <a href={`tel:${row.phone}`}>{row.phone}</a>
                </TableCell>
                <TableCell>{row.inquiry_type}</TableCell>
                <TableCell>{row.your_source}</TableCell>
                <TableCell>{row.content}</TableCell>
                <TableCell className={styles.minWidth68}>{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data?.length === 0 && <img style={{ backgroundImage: 'none' }} src={noData} alt="No Data ..." />}
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
