import React, { Component } from 'react';
import Navbar from './Navbar'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import AfterLoginNavbar from './AfterLoginNavbar'
import auth from './auth'


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      backgroundImage: "url(" + " logo.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        CONTRA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class UpdateOfficer extends React.Component {
    render() {
       const { classes } = this.props;
       const {officerselected} = this.props.location.state;
        const handleSubmitDesignation = event => {
            event.preventDefault();
            console.log("event ", event);
            const my_designationl=this.my_designation.value
            this.props.setDesignation(officerselected, my_designationl)
        };
        const handleSubmitName = event => {
            event.preventDefault();
            console.log("event ", event);
            const my_namel=this.my_name.value
            this.props.setName(officerselected, my_namel)
        };
        const handleSubmitAddress = event => {
            event.preventDefault();
            console.log("event ", event);
            const my_addressl=this.my_address.value
            this.props.setAddress(officerselected, my_addressl)
        };
        const handleSubmitCNIC = event => {
            event.preventDefault();
            console.log("event ", event);
            const my_CNICl=this.my_CNIC.value
            this.props.setCnic(officerselected, my_CNICl)
        };
        
  return (
    <div>
    {auth.isAuthenticated() ? (
        <AfterLoginNavbar /> 
      ) : (
        <Navbar />
      )}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Information
        </Typography>
        <form className={classes.form} Validate onSubmit={handleSubmitName}>
          <TextField

            margin="normal"
            required
            
            id="my_name"
            label="Name"
            inputRef={el => this.my_name = el}
            name="my_name"
            autoComplete="name"
            autoFocus
          />
            <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>

        <form className={classes.form} Validate onSubmit={handleSubmitDesignation}>
          <TextField

            margin="normal"
            required
            
            id="my_designation"
            label="Designation"
            inputRef={el => this.my_designation = el}
            name="my_designation"
            autoComplete="designation"
            autoFocus
          />
            <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
        

        <form className={classes.form} Validate onSubmit={handleSubmitCNIC}>
          <TextField

            margin="normal"
            required
            
            id="my_CNIC"
            label="CNIC"
            inputRef={el => this.my_CNIC = el}
            name="my_CNIC"
            autoComplete="CNIC"
            autoFocus
          />
            <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
        <form className={classes.form} Validate onSubmit={handleSubmitAddress}>
          <TextField

            margin="normal"
            required
            
            id="my_address"
            label="Address"
            inputRef={el => this.my_address = el}
            name="my_address"
            autoComplete="address"
            autoFocus
          />
            <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>


      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
 }
}


export default withStyles(styles)(UpdateOfficer);