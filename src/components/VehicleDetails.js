
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
      label: ' Model ',
      minWidth: 70,
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

const VehicleDetails = props => {
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
          <Link to = '/'>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </a>
          </Link>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Vehicle Information
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
              {props.vehicles.map((vehicle, key) => {
                  if (key == props.selected){
                  
                  return (
                  <div key={key}>
                    {columns.map((column, key1) => {
                    const value = vehicle[key1].toString();

                      if (key1 == 0){
                      return(   
                    <div key={key1}>                    
                        <Container maxWidth="lg" className={classes.container}>

                              {/* Recent Orders */}
                              <Paper className={classes.paper}>
                        
                              <Grid container spacing={1}>
                                
                                <Grid container item xs={12} spacing={3}>
                                <Typography variant="h6" gutterBottom>
             
                                Registration Number :                      
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
                                 
                                                    Maker :                      
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
                                   
                                                      Colour :                      
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
                                       
                                                          Engine Number :                      
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
                                         
                                                            Chassis Number :                      
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
                                           
                                                              Model :                      
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
export default VehicleDetails;
