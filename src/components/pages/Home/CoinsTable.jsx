import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import columns from './columns';
import TableRowCell from './TableRowCell';


export default function CoinsTable({data}) {
  const rows = useMemo(() => {
    return data.map(coin => ({
      id: coin.id,
      cmc_rank: coin.cmc_rank,
      name: coin.name,
      slug: coin.slug,
      symbol: coin.symbol,
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
      <TableContainer sx={{ maxHeight: 490 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, padding: '10px 8px' }}
                >
                  <p style={{ textAlign: column.align, fontWeight: '700' }}>
                    {column.label}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow key={row.id} sx={{minHeight: '81px'}} hover role="checkbox" tabIndex={-1}>
                    {columns.map(column => {
                      return (
                        <TableCell key={column.id} style={{ padding: '16px 8px' }}>
                          <Link to={`coin/${row.slug}`} style={{ justifyContent: column.align }}>
                            <TableRowCell column={column} row={row} />
                          </Link>
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
