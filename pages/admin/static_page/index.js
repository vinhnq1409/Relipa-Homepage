import React, { useEffect, useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Link from 'next/link'
import Admin from 'layouts/Admin.js'
import style from '../../../assets/css/static-page.module.css'
import {
  Button,
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
import { useRouter } from 'next/router'

export default function StaticPage() {
  const router = useRouter()
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

  const handleChangeURL = () => {
    router.push({pathname: 'static_page/add', query: {slug: 'about',mode: 'add'}})
  }
  return (
    <>
      <div className= {style.d_flex}>
        <Button className={style.buttonLeft} color='primary' variant='contained' onClick={handleChangeURL}>
          Create new
        </Button>
      </div>
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
                    <Link href={{pathname: 'static_page/add', query: {slug: 'about',mode: 'edit'}}} passHref>
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
