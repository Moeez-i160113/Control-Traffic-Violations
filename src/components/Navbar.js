import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';


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


function Login(props) {
  return (
    <SvgIcon {...props}>
      <path d="m410.667969 304.007812c-4.097657 0-8.191407-1.558593-11.308594-4.691406-6.25-6.253906-6.25-16.386718 0-22.636718l74.027344-74.027344-74.027344-74.027344c-6.25-6.25-6.25-16.382812 0-22.632812s16.382813-6.25 22.636719 0l85.332031 85.332031c6.25 6.25 6.25 16.386719 0 22.636719l-85.332031 85.332031c-3.136719 3.15625-7.234375 4.714843-11.328125 4.714843zm0 0"/>
    </SvgIcon>
  );
}

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to = '/'>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </a>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Islamabad Traffic Police
          </Typography>
            <Link to = '/table'><Button className={classes.button} color="primary" variant="contained">Challans</Button></Link>
            <Link to = '/vehicletable'><Button className={classes.button} color="primary" variant="contained">Vehicles</Button></Link>
            <Link to = '/officertable'><Button className={classes.button} color="primary" variant="contained">Officers</Button></Link>
            <Link to = '/signin'><Button className={classes.button} color="primary" variant="contained">Sign in</Button></Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}


