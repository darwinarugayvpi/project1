import React, { Component } from 'react';

import Table from '../../components/table/Table';

class HomePage extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch('http://localhost:4000/user')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ employees: data });
      });
  }
  render() {
    return (
      <React.Fragment>
        <h2>List of Employees</h2>
        <Table employees={this.state.employees} />
      </React.Fragment>
    );
  }
}

export default HomePage;
