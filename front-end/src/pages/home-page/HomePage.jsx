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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState', prevState);
  //   console.log('prevProps', prevProps);
  //   if (prevState.employees !== this.state.employees) {
  //   }
  // }

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
