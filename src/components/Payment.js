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

class Payment extends React.Component {
    render() {
    //  // const {challanselected} = this.props.location.state;
    //  // window.alert(this.props.Addpaymentinformation)
    //   //window.alert(challanselected)
    //    const { classes } = this.props;
    //     const handleSubmit = event => {
    //         event.preventDefault();
    //         window.alert("handler")
    //         // alert(this.text);
    //         console.log("event ", event);

    //         // console.log("E ",this.email)
    //         // console.log("p ",this.text)
 

    //     };
        const { classes } = this.props;
        const handleSubmit = event => {
            event.preventDefault();
            const datesubmitted = this.date_submitted.value
            //window.alert("handler")
           const {challanselected} = this.props.location.state;
           var res = String(challanselected) ;

            //window.alert(typeof(res))
            //window.alert(res)            

            //  const challan = this.challan_no.value
             const transactionid = this.transaction_id.value
             const bankname = this.bank_name.value
             this.props.Addpaymentinformation(res,datesubmitted,transactionid,bankname)
         // window.alert('signin page ret ')
        };
  return (
    <form className={classes.container} validate="true" onSubmit={handleSubmit} autoComplete="off">
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
          <TextField 
                          id="transaction_id"
                          label="Transaction ID"
                          required
                          fullWidth
                          type="text"
                          className={classes.textField}
                          inputRef={el => this.transaction_id = el}
                          margin="normal"
                          variant="outlined"
          
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="bank_name"
            label="Bank Name"
            fullWidth
            required
            fullWidth
            type="text"
            className={classes.textField}
            inputRef={el => this.bank_name = el}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="date_submitted" 
          label="Date of Submission" 
          fullWidth
          required
          fullWidth
          type="text"
          className={classes.textField}
          inputRef={el => this.date_submitted = el}
          margin="normal"
          variant="outlined"
          
          />
        </Grid>
      </Grid>
      <Grid container direction="row"justify="center"alignItems="baseline">
          <Grid item md={1}>
          <Button
              
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Pay
            </Button>
                </Grid>
            </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
    </form>
  );
 }
}


export default withStyles(styles)(Payment);