import React, { Component } from 'react';

class Challans extends Component {

  render() {
    return (
    <div className="container-fluid mt-5" >
        <h2 class="text-center">Challan Information </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vehicle Type</th>
              <th scope="col">Vehicle Number</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Challan Reason</th>
              <th scope="col">Challan Price</th>
              <th scope="col">Due Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="chalanList">
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button className="addButton">add</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default Challans;