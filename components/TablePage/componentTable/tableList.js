import React from "react";
import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";
import { EnhancedTableHead } from "./tableHeader";

export const CommonTable = ({
  headCells
}) => {
  return (
    <Paper sx = {{width: '100%'}}>
      <TableContainer>
        <Table stickyHeader = {true}>
          <EnhancedTableHead 
            headCells={headCells}
          />
        </Table>
      </TableContainer>
    </Paper>
  )
};
