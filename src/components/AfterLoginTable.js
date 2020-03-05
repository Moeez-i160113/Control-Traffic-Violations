import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AfterLoginNavbar from './AfterLoginNavbar';
import Typography from '@material-ui/core/Typography';


const columns = [
  { id: 'challan_number_in_day', label: '#', minWidth: 40 },
  { id: 'vehicle_number_plate', label: 'Vehicle Number Plate', minWidth: 40 },
  { id: 'date', label: 'Date', minWidth: 40 },
  {
    id: 'time',
    label: 'Time',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'violation_type',
    label: 'Violation Type',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'fine_amount',
    label: 'Fine Amount',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
  { id: 'driver_name', label: 'Driver Name', minWidth: 40 },
  {
    id: 'driver_cnic',
    label: 'Driver CNIC',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'owner_cnic',
    label: 'Owner CNIC',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'warden_id',
    label: 'Warden ID',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
    { id: 'due_date', label: 'Due Date', minWidth: 40 },
  { id: 'paid_information', label: 'Paid Information', minWidth: 40 },
  {
    id: 'confiscated_document',
    label: 'Confiscated Document',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  

];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});


const StickyHeadTable = props => {
  const classes = useStyles();
   
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
    <AfterLoginNavbar />
      <div className={classes.tableWrapper}>
        <Typography class = "text-center" component="h1" variant="h1">
          Violations Information
        </Typography>
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
            { props.chalans.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((chalan, key) => {
              return(
                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    {columns.map((column, key1) => {
                    const value = chalan[key1].toString();
                    return (
                      <TableCell key={key1} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.chalanCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable;