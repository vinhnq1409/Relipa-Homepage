import React, { useState } from 'react'
import { dataJson, headerJson } from '../../../sampleData/initStaticPage'
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'
<<<<<<< HEAD
import TableList from '../blogs/TableList'
import { get } from '../../../api/BaseRequest'
import { Button } from '@material-ui/core'
import style from '../../../styles/admin/StaticPage.module.css'
=======
>>>>>>> 7a4070a (fix dashboard admin)

export default function StaticPage() {
  const trans = useTrans()
  const router = useRouter()
  const data = JSON.parse(dataJson)
  // const [data, setData] = useState('')
  // useEffect(() => {
  //   async function getData() {
  //     setData(await get(`api/v1/static-page`))
  //   }
  //   getData()
  // }, [])
  const headerTable = JSON.parse(headerJson)

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
    <>
      <div className= {style.dFlex}>
<<<<<<< HEAD
        <Button onClick={handleCreate} color='primary' variant='contained' className= {style.buttonLeft}>Create New</Button>
      </div>
      <TableList
        tableHead={headerTable}
        data={data}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
=======
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
>>>>>>> e551726 (fix version)
    </>
  )
}

StaticPage.layout = Admin
