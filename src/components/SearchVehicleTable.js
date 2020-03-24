import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import AfterLoginNavbar from './AfterLoginNavbar'
import auth from "./auth";


import history from './history';
import Popup from "reactjs-popup";
import VehicleDetails from "./VehicleDetails";
import "./styles.css";
import Payment from './Payment'
import LoginHomePage from './LoginHomePage';
import LoginDailyChallans from './LoginDailyChallans';
import { render } from 'react-dom';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const columns = [
  { id: 'registration_number', disablePadding: true, label: 'Registration Number', minWidth: 70 },
  { id: 'make_name', label: ' Maker ', minWidth: 70 },
  { id: 'color', label: ' Colour ', minWidth: 70 },
  {
    id: 'vehicle_price',
    label: '',
    minWidth: 1,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'engine_no',
    label: '',
    minWidth: 1,
    format: value => value.toLocaleString(),
  },
    {
    id: 'chasis_no',
    label: '',
    minWidth: 1,
  },
  {
    id: 'model',
    label: 'Model ',
    minWidth: 70,
  },
    
];

  

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
      <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < props.vehicleCount}
            checked={props.vehicleCount > 0 && numSelected === props.vehicleCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all vehicles' }}
          />
        </TableCell>
        {columns.map(column => (
          <TableCell
            key={column.id}
            align={column.numeric ? 'right' : 'left'}
            padding={column.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const { selected } = props;
  const { vehicles } = props; 
  const { isPaid } = props;
  //window.alert('inside')
  //window.alert(isPaid);
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className = "text-center" component="h3" variant="h3">
          Search Result
        </Typography>
      )}

      {numSelected == 1 ?  (
        <Tooltip title="Print">

      <Popup modal trigger={<Button  color="secondary" variant="contained" >Details</Button>}>
        {close => <VehicleDetails close={close} selected={selected} vehicles ={props.vehicles} />}
      </Popup>
          

        </Tooltip>
      ) : (
        <Typography className = "text-center" component="h3" variant="h3">
          s
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url(" + " logo.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  paper: {
    // width: '100%',
    // marginBottom: theme.spacing(2),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: "url(" + " logo.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'


  },
  table: {
    minWidth: 50,
    marginLeft: theme.spacing(55)
    
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  form: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EnhancedTable = props => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  var [isPaid] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {

      const newSelecteds = props.vehicles.map(n => parseInt(n[0], 10));
      //window.alert(newSelecteds)
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
   // window.alert(name)

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      //window.alert(1)
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      //window.alert(2)
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      //window.alert(3)
      //window.alert(newSelected)
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 50));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;
  //window.alert(selected)
  let payment = false;
  const { Addpaymentinformation } = props;
//   const query = sessionStorage.getItem('query');
//   sessionStorage.removeItem('query');
  var vehiclerows = JSON.parse(sessionStorage.getItem('vehiclerows'));

 
  return (
    <div className={classes.root}>
      {auth.isAuthenticated() ? (
        <AfterLoginNavbar /> 
      ) : (
        <Navbar />
      )}

      <Paper className={classes.paper}>
      
        <EnhancedTableToolbar numSelected={selected.length} selected={selected} vehicles ={props.vehicles} isPaid={isPaid}  />
        <TableContainer>        
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              vehiclerows={props.vehicleCount.length}
            />
            <TableBody>

              {
                props.vehicles.map((vehicle, key) => {
                  const isItemSelected = isSelected(key);
                  const labelId = `enhanced-table-checkbox-${key}`;
                  
                  var findres = vehiclerows.indexOf(key)
                //   console.log("Finding at key " + key +" is: "+ findres + "l: " + vehicleow.length)

                  if (findres != -1 ){
                  
                    return (
                        <TableRow
                          hover
                          onClick={event => handleClick(event, key)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={key}
                          selected={isItemSelected}
                        >
                           <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                          />
                      {columns.map((column, key1) => {
                        const value = vehicle[key1].toString();
                        
                        
                        if (key != 0 && key == selected && key1 == 5 ){
                          //payment = value
                          // payment = true
                          //props.vehicleselected = selected
                          //window.alert(payment)
                          //window.alert(selected)
                          return(
                            <div>
                          {<Link to={{ pathname: '/updatevehicle', state: { vehicleselected: selected} }}>
                            <Button className={classes.button} color="primary" variant="contained">
                              Update
                            </Button>
                          </Link>
              
  
                          }
                          </div>   
                              
                               
                                
                            );
                        
  
                       // return (<div isPaid = {selected}></div>);
                      }
                        
          
                      if (key1 === 1 || key1 === 0 || key1 === 2 || key1 === 6){
                          return(
                          <TableCell padding="checkbox" key={key1} align={column.align} >
                            
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                
    
                          </TableCell>
                          );
                        }
                        })}
                        </TableRow>
    
                        )
                    }
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </div>
        
      );
    }
    
    export default EnhancedTable;