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

const DailyDeposits = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Daily Deposits</Title>
      {
                props.daily_amount.map((key) => {
                  return (
                    <div>
                    <Typography component="textSecondary" variant="h6">
                    Rs : {key}
                  </Typography>
                    </div>
                    );
                })
        }
    </React.Fragment>
  );
}
export default DailyDeposits;