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
  return (
    <React.Fragment>
      <Title>Annual Deposits</Title>
      <Typography component="p" variant="h6">
        Rs : {props.annual_amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 1 March, 2020
      </Typography>
    </React.Fragment>
  );
}
export default MonthlyDeposits;