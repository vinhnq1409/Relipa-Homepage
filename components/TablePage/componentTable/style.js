import { styled } from '@material-ui/styles'
import { TableCell, TableRow, tableCellClasses } from '@material-ui/core'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#eee'
  }
}))

export const StyledTableCellRow = styled(TableCell)(() => ({
  padding: '8px 10px',
  fontSize: '0.875rem',
  color: '#000'
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    padding: '10px',
    fontSize: '0.875rem',
    color: '#fff'
  }
}))
