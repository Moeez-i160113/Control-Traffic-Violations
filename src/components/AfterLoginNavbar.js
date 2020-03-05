import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  style : {
    background : '#2E3B55'
  },
  button: {
    margin: theme.spacing(1),
  },



}));



export default function AfterLoginNavbar() {
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
      <AppBar position="static">
        <Toolbar>
          <Link to = '/afterloginhomepage'>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </a>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Challans
          </Typography>
          <Link to = '/afterlogintable'><Button className={classes.button} color="primary" variant="contained" >Challans</Button></Link>
          <Link to = '/afterloginofficertable'><Button className={classes.button} color="primary" variant="contained">Officers</Button></Link>
          <Link to = '/afterloginusertable'><Button className={classes.button} color="primary" variant="contained">Users</Button></Link>
          <Avatar aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
             A
          </Avatar>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open1}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Link to = '/loginhomepage'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
              <Link to = '/'><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}


