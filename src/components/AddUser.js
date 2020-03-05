import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';


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
      color: red[100],
    },
  },
}));

function My_Icon(props) {
  return (
    <SvgIcon {...props}>
     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/><path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%', 
    alignItems: 'center',
  },
  textField: {
    width: '200px',
    marginLeft: '10px',
    marginRight: '10px', 
    marginTop: 10,
    fontWeight: 500
  },
    root: {
    flexGrow: 1,
  },
  icon: {
    alignItems: 'center',
  },
};



class AddUser extends React.Component {
    render() {
       const { classes } = this.props;
        const handleSubmit = event => {
            event.preventDefault();
            // alert(this.text);
            console.log("event ", event);

            // console.log("E ",this.email)
            // console.log("p ",this.text)
          const namee=this.name.value
          const agee=this.age.value
          const homeaddresss=this.homeaddress.value
          const CNICC=this.CNIC.value
          const phone_noo=this.phone_no.value
          const passwordd=this.password.value
         this.props.createUser(namee,agee,homeaddresss,CNICC, phone_noo, passwordd)
        };
        return <form className={classes.container} validate="true" onSubmit={handleSubmit} autoComplete="off">
           <div>
           <div className={classes.root}>   
        <My_Icon className={classes.container} /> 
              <Typography component="h1" variant="h1" class="text-center" >
                 Add User
              </Typography>

            </div>
            <Grid container direction="column" justify="space-evenly" alignItems="center">
            
            <TextField 
                id="name"
                label="Name"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.name = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="age"
                label="Age"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.age = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="homeaddress"
                label="Home Address"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.homeaddress = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="CNIC"
                label="CNIC"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.CNIC = el}
                margin="normal"
                variant="outlined"
            />
                        <TextField 
                id="phone_no"
                label="Phone Number"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.phone_no = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="password"
                label="Password"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.password = el}
                margin="normal"
                variant="outlined"
            />
           
    </Grid>
    </div>
            <Grid container direction="row"justify="center"alignItems="baseline">
            <Grid item md={1}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
             Add
          </Button>
                </Grid>
            </Grid>
        </form>
    }

}
export default withStyles(styles)(AddUser);
