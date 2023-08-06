import { useMemo, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import columns from './columns';
import Pct from '../../common/Pct';
import CoinLogo from '../../common/CoinLogo';


export default function CoinsTable({data}) {
  const rows = useMemo(() => {
    return data.map(coin => ({
      id: coin.id,
      cmc_rank: coin.cmc_rank,
      name: coin.name,
      price: coin.quote.USD.price,
      percent_change_1h: coin.quote.USD.percent_change_1h,
      percent_change_24h: coin.quote.USD.percent_change_24h,
      percent_change_7d: coin.quote.USD.percent_change_7d,
      market_cap: coin.quote.USD.market_cap,
      volume_24h: coin.quote.USD.volume_24h,
      circulating_supply: coin.circulating_supply
    }));
  }, []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);


  const handleChangePage = (event, newPage) => {
    setPage(newPage); 
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map(column => {
                      const cellValue = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          <p style={{ textAlign: column.align }}>
                          {
                            column.format && typeof cellValue === 'number'
                            ? column.format(cellValue)
                            : cellValue
                          }
                          </p>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
