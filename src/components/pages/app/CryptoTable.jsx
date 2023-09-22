'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { formatPrice, formatCompactPrice, formatCompactNumber } from "@utils/numberFormat";
import TableRowCell from './TableRowCell';


const columns = [
  {
    id: '', 
    label: ''
  },
  {
    id: 'cmc_rank', 
    label: '#', 
    minWidth: 40
  },
  {
    id: 'name', 
    label: 'Name', 
    minWidth: 170
  },
  {
    id: 'price', 
    label: 'Price', 
    align: 'center',
    format: (value) => formatPrice(value)
  },
  {
    id: 'percent_change_1h', 
    label: '1h %', 
    minWidth: 80, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'percent_change_24h', 
    label: '24h %', 
    minWidth: 80, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'percent_change_7d', 
    label: '7d %', 
    minWidth: 80, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'market_cap', 
    label: 'Market Cap',
    minWidth: 110,  
    align: 'center',
    format: (value) => formatCompactPrice(value)
  },
  {
    id: 'volume_24h', 
    label: 'Volume (24h)', 
    minWidth: 110, 
    align: 'center', 
    format: (value) => formatCompactPrice(value)
  },
  {
    id: 'circulating_supply',
    label: 'Circulating Supply',
    minWidth: 110,  
    align: 'center',
    format: (value) => formatCompactNumber(value)
  },
  // {
  //   id: 'price_graph', 
  //   label: 'Last 7 Days', 
  //   minWidth: 180,
  //   align: 'center'
  // }
];


export default function CryptoTable({data}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const rows = useMemo(() => {
    return data.map(coin => ({
      id: coin.id,
      slug: coin.id,
      cmc_rank: coin.market_cap_rank,
      img: coin.image,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      percent_change_1h: coin.price_change_percentage_1h_in_currency,
      percent_change_24h: coin.price_change_percentage_24h_in_currency,
      percent_change_7d: coin.price_change_percentage_7d_in_currency,
      market_cap: coin.market_cap,
      volume_24h: coin.total_volume,
      circulating_supply: coin.circulating_supply
    }));
  }, []);


  function handleChangePage(event, newPage) {
    setPage(newPage); 
  };
  function handleChangeRowsPerPage(event) {
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
                <TableCell key={column.id} sx={{ minWidth: column.minWidth, padding: '10px 8px' }}>
                  <p className={`text-${column.align} font-semibold`}>
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
                        <TableCell key={column.id} sx={{padding: '16px 8px'}}>
                          <Link href={`/coin/${row.slug}`} className={`justify-${column.align}`}>
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
        rowsPerPageOptions={[10, 25, 100]} component="div"
        count={rows.length} rowsPerPage={rowsPerPage} page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
