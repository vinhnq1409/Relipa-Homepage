import React from "react";
import { TableHead, TableRow, TableSortLabel, TableCell } from "@material-ui/core";

export const EnhancedTableHead = (props) => {
  const {headCells} = props

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => {
          <TableCell key={headCell.id}>
            <TableSortLabel
              hideSortIcon = {true}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        })}
      </TableRow>
    </TableHead>
  )
}