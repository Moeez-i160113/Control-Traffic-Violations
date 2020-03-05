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

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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

class SignIn extends React.Component {
    render() {
       const { classes } = this.props;
        const handleSubmit = event => {
            event.preventDefault();
            // alert(this.text);
            console.log("event ", event);

            // console.log("E ",this.email)
            // console.log("p ",this.text)
          const my_emaill=this.my_email.value
          const abc=my_emaill.split(".");  

          const my_passwordd=this.my_password.value

          this.props.Login(parseFloat(abc[1]), abc[0], my_passwordd)
        };
  return (
    <div>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6" gutterBottom>
        Payment Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField required id="challan_no" label="Challan Number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="transaction_id" label="Transaction ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="bank_name"
            label="Bank Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="date_submitted" label="Date of Submission" fullWidth />
        </Grid>
      </Grid>
          <Link href="/loginhomepage" variant="body2"><Button
              
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Payment
          </Button>
          </Link>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
 }
}


export default withStyles(styles)(SignIn);