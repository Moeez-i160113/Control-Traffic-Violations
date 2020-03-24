import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Title from './Title'

const data = [
  {
    month: 'Monday', offenses: 4000, amount: 2400, amt: 2400,
  },
  {
    month: 'Tuesday', offenses: 3000, amount: 1398, amt: 2210,
  },
  {
    month: 'Wednesday', offenses: 2000, amount: 9800, amt: 2290,
  },
  {
    month: 'Thursday', offenses: 2780, amount: 3908, amt: 2000,
  },
  {
    month: 'Friday', offenses: 1890, amount: 4800, amt: 2181,
  },
  {
    month: 'Saturday', offenses: 2390, amount: 3800, amt: 2500,
  },
  {
    month: 'Sunday', offenses: 3490, amount: 4300, amt: 2100,
  },
];


export default class WeeklyChallans extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';


  render() {
    console.log(this.props.daily_count)
    
    return (
    <React.Fragment>
      <Title>Monthly Amount Collection Reports</Title>
      <BarChart
        width={500}
        height={300}
        data={this.props.monthly_count}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="offenses" fill="#82ca9d" />
      </BarChart>
    </React.Fragment>
    );
  }
}
