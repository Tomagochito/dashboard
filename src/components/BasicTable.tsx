import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";

interface Row {
  rangeHours: string;
  windDirection: string;
}

interface Config {
  rows: Row[];
}

export default function BasicTable({ rows }: Config) {
  let [rowsState, setRowsState] = useState<Row[]>([]);

  useEffect(() => {
    setRowsState(rows);
  }, [rows]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rango de horas</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsState.map((row) => (
            <TableRow
              key={row.rangeHours}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rangeHours}
              </TableCell>
              <TableCell align="right">{row.windDirection}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
