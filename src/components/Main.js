import React from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '200px',
    marginLeft: '10px',
    marginRight: '10px', 
    marginTop: 10,
    fontWeight: 500
  },
};



class Main extends React.Component {
    render() {
        const { classes } = this.props;
        const handleSubmit = event => {
            event.preventDefault();
            // alert(this.text);
            console.log("event ", event);

            // console.log("E ",this.email)
            // console.log("p ",this.text)
          const Challan_Numberr=this.Challan_Number.value
          const Challan_Pricee=500

          const vehicle_number_platee =this.vehicle_number_plate.value
          const date_timee =this.date_time.value
          
          const violation_typee =this.violation_type.value
          const fine_amountt=this.fine_amount.value
          
          const driver_namee=this.driver_name.value
          const driver_cnicc=this.driver_cnic.value
          const owner_cnicc=this.owner_cnic.value
          const warden_idd=this.warden_id.value
          
          const due_datee=this.due_date.value
          const paid_informationn=this.paid_information.value
          
          const confiscated_documentt=this.confiscated_document.value
          const available_att=this.available_at.value

          this.props.add_Chalan(Challan_Numberr, vehicle_number_platee, date_timee, violation_typee, fine_amountt, driver_namee, driver_cnicc, owner_cnicc, warden_idd, due_datee, confiscated_documentt, available_att)

        };
        return <form className={classes.container} validate="true" onSubmit={handleSubmit} autoComplete="off">
           <div>
           <div>        
              <Typography class="text-center" component="h1" variant="h1">
                 Add Challan
              </Typography>
            </div>
            <Grid container direction="row" justify="space-evenly" alignItems="baseline">
            
            <TextField 
                id="Challan_Number"
                label="Challan Number"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.Challan_Number = el}
                margin="normal"
                variant="outlined"
            />

            <TextField 
                id="vehicle_number_plate"
                label="Vehicle number plate"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.vehicle_number_plate = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="date_time"
                label="Date & Time"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.date_time = el}
                margin="normal"
                variant="outlined"
            />
                        <TextField 
                id="violation_type"
                label="Violation type"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.violation_type = el}
                margin="normal"
                variant="outlined"
            />
                        <TextField 
                id="fine_amount"
                label="Fine Amount"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.fine_amount = el}
                margin="normal"
                variant="outlined"
            />
                        <TextField 
                id="driver_name"
                label="Driver Name"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.driver_name = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="driver_cnic"
                label="Driver CNIC"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.driver_cnic = el}
                margin="normal"
                variant="outlined"
            />
                        <TextField 
                id="owner_cnic"
                label="Owner CNIC "
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.owner_cnic = el}
                margin="normal"
                variant="outlined"
            />
            <TextField 
                id="warden_id"
                label="Warden ID"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.warden_id = el}
                margin="normal"
                variant="outlined"
            />
           <TextField 
                id="due_date"
                label="Due Date"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.due_date = el}
                margin="normal"
                variant="outlined"
            />
              <TextField 
                id="paid_information"
                label="Paid Information"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.paid_information = el}
                margin="normal"
                variant="outlined"
            />
              <TextField 
                id="confiscated_document"
                label="Confiscated Doc"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.confiscated_document = el}
                margin="normal"
                variant="outlined"
            />
              <TextField 
                id="available_at"
                label="Available At"
                required
                fullWidth
                type="text"
                className={classes.textField}
                inputRef={el => this.available_at = el}
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
export default withStyles(styles)(Main);
