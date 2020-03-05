import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';


import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: red[800],
    },
  },
}));

function Identity(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
    </SvgIcon>
  );
}

function AddChallan(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </SvgIcon>
  );
}

function AddUser(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </SvgIcon>
  );
}

export const mainListItems = (
  <div>
    <Link href="/loginhomepage" variant="body2"><ListItem button>
      <ListItemIcon>
        <Identity />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem></Link>

    <Link href="/loginadduser" variant="body2"><ListItem button>
      <ListItemIcon>
         <AddUser />
      </ListItemIcon>
      <ListItemText primary="Add User" />
    </ListItem></Link>

    <Link href="/loginaddOfficer" variant="body2"><ListItem button>
      <ListItemIcon>
         <AddUser />
      </ListItemIcon>
      <ListItemText primary="Add Officer" />
    </ListItem></Link>

      </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Functions</ListSubheader>
    <Link href="/loginaddchallan" variant="body2">
    <ListItem button>
      <ListItemIcon>
        <AddChallan />
      </ListItemIcon>
      <ListItemText primary="Add Challan" />
    </ListItem>
    </Link>

    <Link href="/logindailychallans" variant="body2">
    <ListItem button>
      <ListItemIcon>
        <AddChallan />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Link>

  </div>
);