import React from "react";
import { Link, TableRow, TableCell } from "@material-ui/core";

export const TableList = ({id, item}) => {
  return (
    <>
      <TableRow hover key={id}>
        <TableCell>{id + 1}</TableCell>
        <TableCell component='th' scope="row">{item.subject}</TableCell>
        <TableCell>{item.author}</TableCell>
        <TableCell>
          <Link>View | </Link> 
          <Link>Edit</Link>
        </TableCell>
      </TableRow>
    </>
  )
}

