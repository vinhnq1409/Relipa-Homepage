import React, { useState } from 'react'
import { dataJson, headerJson } from '../../sampleData/dataBase'
import Link from 'next/link'
import Admin from 'layouts/Admin.js'
import style from '../../assets/css/static-page.module.css'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'

export default function StaticPage() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowPerPage] = useState(5)
  const headerTable = JSON.parse(headerJson)
  const data = JSON.parse(dataJson)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(event.target.value)
    setPage(0)
  }
  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                {headerTable.map((item) => (
                  <TableCell align='justify' variant='head' key={item.id}>
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell> {index + 1} </TableCell>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>
                    <Link href='#'>{<VisibilityIcon color='secondary' className= {style.icon} fontSize='small' />}</Link> |{' '}
                    {''}
                    <Link href='/admin/editPage' passHref>
                      {<EditIcon className= {style.icon} color='primary' fontSize='small' />}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component='div'
          rowsPerPage={rowsPerPage}
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

StaticPage.layout = Admin
