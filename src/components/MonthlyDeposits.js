import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const MonthlyDeposits = props =>  {
  const classes = useStyles();
  var date = new Date();
  return (
    <React.Fragment>
      <Title>Annual Deposits --------------------------------- </Title>
      <Typography component="p" variant="h6">
         - On {date.toLocaleDateString()}    are  Rs : {props.annual_amount}           
      </Typography>
    </React.Fragment>
  );
}
export default MonthlyDeposits;