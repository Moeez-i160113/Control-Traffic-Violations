import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import Title from './Title'

const data = [
  {
    day: 'Page A', offenses: 590, amount: 800, amt: 1400,
  },
  {
    day: 'Page B', offenses: 868, amount: 967, amt: 1506,
  },
  {
    day: 'Page C', offenses: 1397, amount: 1098, amt: 989,
  },
  {
    day: 'Page D', offenses: 1480, amount: 1200, amt: 1228,
  },
  {
    day: 'Page E', offenses: 1520, amount: 1108, amt: 1100,
  },
  {
    day: 'Page F', offenses: 1400, amount: 680, amt: 1700,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    const {monthly_count} = this.props;
    return (
      <React.Fragment>
      <Title>Daily Challans Reports</Title>
      <ComposedChart
        width={500}
        height={400}
        data={this.props.daily_count}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="offenses" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="offenses" stroke="#ff7300" />
      </ComposedChart>

      </React.Fragment> 
      );
  }
}
