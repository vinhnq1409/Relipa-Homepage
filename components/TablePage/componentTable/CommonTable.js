import React from "react";
import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";
import { EnhancedTableHead } from "./tableHeader";

export const CommonTable = ({ headCells, children, className }) => {
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer className={className}>
        <Table stickyHeader={true}>
          <EnhancedTableHead headCells={headCells} />
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
