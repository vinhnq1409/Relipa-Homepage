import React from "react";
import {
  TableHead,
  TableRow,
  TableSortLabel,
  TableCell,
} from "@material-ui/core";

export const EnhancedTableHead = ({ headCells }) => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
