import React, { Component } from 'react';

import logo from '../logo.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';

import Main from './Main'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to = '/'>
        Contra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const columns = [
  { id: 'challan_number_in_day', disablePadding: true, label: '#', minWidth: 40 },
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
  {
    id: 'available_at',
    label: 'Available At',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'latitude_number_part',
    label: 'latitude_number_part',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
    {
    id: 'latitude_decimal_part',
    label: 'latitude_decimal_part',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'longitude_number_part',
    label: 'longitude_number_part',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
    {
    id: 'longitude_decimal_part',
    label: 'longitude_decimal_part',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
    
  

];

const drawerWidth = 10;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginLeft: '10px',
    marginRight: '10px',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Details = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
          <MenuIcon />
          </IconButton>
          <Link to = '/afterloginhomepage'>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </a>
          </Link>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Challan Information
          </Typography>
      </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

            {/* Recent Orders */}
          <Paper className={classes.paper}>
          <div>
              {props.chalans.map((chalan, key) => {
                  if (key == props.selected){
                  
                  return (
                  <div key={key}>
                    {columns.map((column, key1) => {
                    const value = chalan[key1].toString();
                      if (key1 == 0){
                      return(   
                    <div key={key1}>                    
                        <Container maxWidth="lg" className={classes.container}>

                              {/* Recent Orders */}
                              <Paper className={classes.paper}>
                        
                              <Grid container spacing={1}>
                                
                                <Grid container item xs={12} spacing={3}>
                                <Typography variant="h6" gutterBottom>
             
                                      ID :                      
                                      {column.format && typeof value === 'number' ? column.format(value) : value}

                                  </Typography>

                                </Grid>

                              </Grid>
                              </Paper>
                          </Container>
                              
                              

                            </div>
                        
                      );
                      }

                      if (key1 == 7){
                        return(   
                      <div key={key1}>                    
                          <Container maxWidth="lg" className={classes.container}>
  
                                {/* Recent Orders */}
                                <Paper className={classes.paper}>
                          
                                <Grid container spacing={1}>
                                  
                                  <Grid container item xs={12} spacing={3}>
                                  <Typography variant="h6" gutterBottom>
               
                                  Owner CNIC :                      
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
  
                                    </Typography>
  
                                  </Grid>
  
                                </Grid>
                                </Paper>
                            </Container>
                                
                                
  
                              </div>
                          
                        );
                        }
                        if (key1 == 8){
                          return(   
                        <div key={key1}>                    
                            <Container maxWidth="lg" className={classes.container}>
    
                                  {/* Recent Orders */}
                                  <Paper className={classes.paper}>
                            
                                  <Grid container spacing={1}>
                                    
                                    <Grid container item xs={12} spacing={3}>
                                    <Typography variant="h6" gutterBottom>
                 
                                    Warden ID :                      
                                          {column.format && typeof value === 'number' ? column.format(value) : value}
    
                                      </Typography>
    
                                    </Grid>
    
                                  </Grid>
                                  </Paper>
                              </Container>
                                  
                                  
    
                                </div>
                            
                          );
                          }

                          if (key1 == 9){
                            return(   
                          <div key={key1}>                    
                              <Container maxWidth="lg" className={classes.container}>
      
                                    {/* Recent Orders */}
                                    <Paper className={classes.paper}>
                              
                                    <Grid container spacing={1}>
                                      
                                      <Grid container item xs={12} spacing={3}>
                                      <Typography variant="h6" gutterBottom>
                   
                                      Due Date :                      
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
      
                                        </Typography>
      
                                      </Grid>
      
                                    </Grid>
                                    </Paper>
                                </Container>
                                    
                                    
      
                                  </div>
                              
                            );
                            }
                            if (key1 == 10){
                              return(   
                            <div key={key1}>                    
                                <Container maxWidth="lg" className={classes.container}>
        
                                      {/* Recent Orders */}
                                      <Paper className={classes.paper}>
                                
                                      <Grid container spacing={1}>
                                        
                                        <Grid container item xs={12} spacing={3}>
                                        <Typography variant="h6" gutterBottom>
                     
                                          Paid Information :                      
                                              {column.format && typeof value === 'number' ? column.format(value) : value}
        
                                          </Typography>
        
                                        </Grid>
        
                                      </Grid>
                                      </Paper>
                                  </Container>
                                      
                                      
        
                                    </div>
                                
                              );
                              }
                              if (key1 == 11){
                                return(   
                              <div key={key1}>                    
                                  <Container maxWidth="lg" className={classes.container}>
          
                                        {/* Recent Orders */}
                                        <Paper className={classes.paper}>
                                  
                                        <Grid container spacing={1}>
                                          
                                          <Grid container item xs={12} spacing={3}>
                                          <Typography variant="h6" gutterBottom>
                       
                                          Confiscated Document :                      
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
          
                                            </Typography>
          
                                          </Grid>
          
                                        </Grid>
                                        </Paper>
                                    </Container>
                                        
                                        
          
                                      </div>
                                  
                                );
                                }
                                        if (key1 == 1){
                                          return(   
                                        <div key={key1}>                    
                                            <Container maxWidth="lg" className={classes.container}>
                    
                                                  {/* Recent Orders */}
                                                  <Paper className={classes.paper}>
                                            
                                                  <Grid container spacing={1}>
                                                    
                                                    <Grid container item xs={12} spacing={3}>
                                                    <Typography variant="h6" gutterBottom>
                                 
                                                    Vehicle Number Plate :                      
                                                          {column.format && typeof value === 'number' ? column.format(value) : value}
                    
                                                      </Typography>
                    
                                                    </Grid>
                    
                                                  </Grid>
                                                  </Paper>
                                              </Container>
                                                  
                                                  
                    
                                                </div>
                                            
                                          );
                                          }
                                          if (key1 == 2){
                                            return(   
                                          <div key={key1}>                    
                                              <Container maxWidth="lg" className={classes.container}>
                      
                                                    {/* Recent Orders */}
                                                    <Paper className={classes.paper}>
                                              
                                                    <Grid container spacing={1}>
                                                      
                                                      <Grid container item xs={12} spacing={3}>
                                                      <Typography variant="h6" gutterBottom>
                                   
                                                      Date :                      
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                      
                                                        </Typography>
                      
                                                      </Grid>
                      
                                                    </Grid>
                                                    </Paper>
                                                </Container>
                                                    
                                                    
                      
                                                  </div>
                                              
                                            );
                                            }
                                            if (key1 == 3){
                                              return(   
                                            <div key={key1}>                    
                                                <Container maxWidth="lg" className={classes.container}>
                        
                                                      {/* Recent Orders */}
                                                      <Paper className={classes.paper}>
                                                
                                                      <Grid container spacing={1}>
                                                        
                                                        <Grid container item xs={12} spacing={3}>
                                                        <Typography variant="h6" gutterBottom>
                                     
                                                         Violation Type :                      
                                                              {column.format && typeof value === 'number' ? column.format(value) : value}
                        
                                                          </Typography>
                        
                                                        </Grid>
                        
                                                      </Grid>
                                                      </Paper>
                                                  </Container>
                                                      
                                                      
                        
                                                    </div>
                                                
                                              );
                                              }
                                              if (key1 == 4){
                                                return(   
                                              <div key={key1}>                    
                                                  <Container maxWidth="lg" className={classes.container}>
                          
                                                        {/* Recent Orders */}
                                                        <Paper className={classes.paper}>
                                                  
                                                        <Grid container spacing={1}>
                                                          
                                                          <Grid container item xs={12} spacing={3}>
                                                          <Typography variant="h6" gutterBottom>
                                       
                                                          Fine Amount :                      
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                          
                                                            </Typography>
                          
                                                          </Grid>
                          
                                                        </Grid>
                                                        </Paper>
                                                    </Container>
                                                        
                                                        
                          
                                                      </div>
                                                  
                                                );
                                                }
                                                if (key1 == 5){
                                                  return(   
                                                <div key={key1}>                    
                                                    <Container maxWidth="lg" className={classes.container}>
                            
                                                          {/* Recent Orders */}
                                                          <Paper className={classes.paper}>
                                                    
                                                          <Grid container spacing={1}>
                                                            
                                                            <Grid container item xs={12} spacing={3}>
                                                            <Typography variant="h6" gutterBottom>
                                         
                                                            Driver Name :                      
                                                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                            
                                                              </Typography>
                            
                                                            </Grid>
                            
                                                          </Grid>
                                                          </Paper>
                                                      </Container>
                                                          
                                                          
                            
                                                        </div>
                                                    
                                                  );
                                                  }                      
                                                  if (key1 == 6){
                                                    return(   
                                                  <div key={key1}>                    
                                                      <Container maxWidth="lg" className={classes.container}>
                              
                                                            {/* Recent Orders */}
                                                            <Paper className={classes.paper}>
                                                      
                                                            <Grid container spacing={1}>
                                                              
                                                              <Grid container item xs={12} spacing={3}>
                                                              <Typography variant="h6" gutterBottom>
                                           
                                                              Driver CNIC :                      
                                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                              
                                                                </Typography>
                              
                                                              </Grid>
                              
                                                            </Grid>
                                                            </Paper>
                                                        </Container>
                                                            
                                                            
                              
                                                          </div>
                                                      
                                                    );
                                                    }

                                                      else {
                                                        return(   
                                                      <div key={key1}>                    
                                                                  <Typography variant="h6" gutterBottom>
                                               
                                                        
                                                                    </Typography>
                                
                                                                
                                                                
                                  
                                                              </div>
                                                          
                                                         );
                                                        }
                                                                                                             
                    })}

                    </div>
                    )}
                })}
         
         </div>

          </Paper>
          <Box pt={5}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
export default Details;
