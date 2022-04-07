import Admin from 'layouts/Admin.js'
import React from "react";
import { dataJson, headerJson } from "../../variables/dataBase";
import Link from "next/link";
import Admin from "layouts/Admin.js";
import "../../assets/css/static-page.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function StaticPage() {
  const headerTable = JSON.parse(headerJson);
  const data = JSON.parse(dataJson);
  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                {headerTable.map((item) => (
                  <TableCell key={item.id}>{item.label}</TableCell>
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
                    <Link href="#">
                      {
                        <VisibilityIcon
                          color="secondary"
                          className="icon"
                          fontSize="small"
                        />
                      }
                    </Link>{" "}
                    | {""}
                    <Link href="/admin/editPage" passHref>
                      {
                        <EditIcon
                          className="icon"
                          color="primary"
                          fontSize="small"
                        />
                      }
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

StaticPage.layout = Admin
