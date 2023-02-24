import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(State, Total, Recovered, Active, Death, Vaccinated, LastUpdated) {
  return {State, Total, Recovered, Active, Death, Vaccinated, LastUpdated };
}

const rows = [
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
  createData('UP', 2090050,  2062971, 3541, 23538, 2000000, '10/02/2023'),
];

export default function PublicTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
            <StyledTableCell align="right">Active Cases</StyledTableCell>
            <StyledTableCell align="right">Death</StyledTableCell>
            <StyledTableCell align="right">Vaccinated</StyledTableCell>
            <StyledTableCell align="right">Last Updated On</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.State}>
              <StyledTableCell component="th" scope="row">
                {row.State}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Total}</StyledTableCell>
              <StyledTableCell align="right">{row.Recovered}</StyledTableCell>
              <StyledTableCell align="right">{row.Active}</StyledTableCell>
              <StyledTableCell align="right">{row.Death}</StyledTableCell>
              <StyledTableCell align="right">{row.Vaccinated}</StyledTableCell>
              <StyledTableCell align="right">{row.LastUpdated}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}