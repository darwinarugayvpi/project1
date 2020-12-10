import React, { Component } from 'react';
import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';
class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: this.props.employees,
    };
  }

  tableHeadList = () => {
    const stateCopy = [...this.props.employees];
    const lists = { ...stateCopy[0] };
    const objKeys = Object.keys(lists);
    return objKeys;
  };

  handleDelete = (id) => {
    fetch(`http://localhost:4000/user/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    console.log(this.props.employees);
    return (
      <table className="table">
        <TableHead tableHead={this.tableHeadList()} />
        <TableBody
          tableBody={this.props.employees}
          onDelete={this.handleDelete}
        />
      </table>
    );
  }
}

export default Table;
