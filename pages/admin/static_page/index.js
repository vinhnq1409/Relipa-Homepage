import React, { useEffect, useState } from 'react'
import { headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
import TableList from '../blogs/TableList'
import { get } from '../../../api/BaseRequest'
<<<<<<< HEAD
import { Button } from '@material-ui/core'
import style from '../../../styles/admin/StaticPage.module.css'
import TableList from '../blogs/TableList'

=======
>>>>>>> 527914b (update api server)

export default function StaticPage() {
  const router = useRouter()
  const [data, setData] = useState('')
  useEffect(() => {
    async function getData() {
      setData(await get(`api/v1/static-page`))
    }
    getData()
  }, [])
  const headerTable = JSON.parse(headerJson)
<<<<<<< HEAD
  const data = JSON.parse(dataJson)
  // const [data, setData] = useState('')
  // useEffect(() => {
  //   async function getData() {
  //     setData(await get(`api/v1/static-page`))
  //   }
  //   getData()
  // }, [])
  const headerTable = JSON.parse(headerJson)

  const [params, setParams] = useState({
    per_page: 10,
    page: 1
  })
=======
>>>>>>> 527914b (update api server)

  
  console.log(data)
  const handleView = (id) => {
    // console.log('View', id)
  }
  const handleUpdate = (id) => {
    // console.log('Update', id)
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'edit' }})
  }
  const handleDelete = (id) => {
    // console.log('Delete', id)
  }

  const handleCreate = (id) => {
    router.push({ pathname: 'static_page/add', query: { slug: 'about', mode: 'add' }})
  }

  return (
<<<<<<< HEAD
    <>
      <div>
        <Button className={style.buttonLeft} color='primary' variant='contained' onClick={handleChangeURL}>
          {trans.static_page.createNew}
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
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.view}</TableCell>
                  <TableCell>
                    <Link href='#'>{<VisibilityIcon color='secondary' className= {style.icon} fontSize='small' />}</Link> |{' '}
                    {''}
                    <Link href={{ pathname: 'static_page/add', query: { slug: 'about', mode: 'edit' }}} passHref>
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
=======
    data && <TableList
      tableHead={headerTable}
      data={data}
      onView = {handleView}
      onUpdate = {handleUpdate}
      onDelete = {handleDelete}
    />
>>>>>>> 527914b (update api server)
  )
}

StaticPage.layout = Admin
