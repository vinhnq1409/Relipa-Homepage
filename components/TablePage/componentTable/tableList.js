import React from "react";
import { Link, TableRow, TableCell, Table } from "@material-ui/core";

export const TableList = ({ id, item }) => {

  return (
    <>
      <TableRow key={id}>
        <TableCell> {id + 1} </TableCell>
        <TableCell>{item.subject}</TableCell>
        <TableCell>{item.author}</TableCell>
        <TableCell>
          <Link>View</Link> | {' '}
          <Link>Edit</Link>
        </TableCell>
      </TableRow>
    </>
  )
}
