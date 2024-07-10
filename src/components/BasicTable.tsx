import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react"

{/* 3. Declare la interfaz del prop de entrada */ }

interface Config {
  rows: Array<object>;
}

export default function BasicTable(data: Config) {


  {/* 
         4. Declare la variable de estado (rows) y la función de actualización (setRows).
         Use el mismo identificador de la variable con valores fijos (rows)
     */}

  let [rows, setRows] = useState([])
  {/* 
         5. Agregue el hook useEffect, controlado por el prop del componente (data), y
         Dentro del hook, invoque al métdo de actualización con el valor del prop (data.rows).
     */}

  useEffect(() => {

    (() => {

      setRows(data.rows)

    })()

  }, [data])



  {/* JSX */ }
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* Modifique la cabecera de la tabla con los títulos adecuados */}
            <TableCell>Rango de horas</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Modifique las filas de la tabla con las claves rangeHours y windDirection del objeto  */}
          {rows.map((row) => (
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