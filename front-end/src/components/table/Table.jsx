import React, { Component } from 'react';
import Swal from 'sweetalert2';

import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = { employees: this.props.employees };
  }

  tableHeadList = () => {
    const stateCopy = [...this.props.employees];
    const lists = { ...stateCopy[0] };
    const objKeys = Object.keys(lists);
    return objKeys;
  };

  handleDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This is permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        fetch(`http://localhost:4000/user/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('data');
            if (data) {
              Swal.fire({
                icon: 'success',
                title: 'Delete',
                text: 'Successfully deleted!',
              });
              const copyState = [...this.props.employees];
              const newState = copyState.filter((emp) => {
                return emp._id !== id;
                // console.log(id, emp._id, id !== emp._id);
              });
              return this.setState({ employees: newState });
            } else {
              Swal.fire({
                title: 'Error',
                text: 'Something went wrong!',
                icon: 'error',
              });
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data is safe', 'error');
      }
    });
  }

  render() {
    console.log('state', this.state.employees);
    console.log('props', this.props.employees);
    return (
      <React.Fragment>
        <table className="table table-bordered">
          <TableHead tableHead={this.tableHeadList()} />
          <TableBody
            tableBody={this.props.employees}
            onDelete={this.handleDelete}
          />
        </table>
        <p>
          {this.props.employees.length}{' '}
          {this.props.employees.length > 1 ? 'records' : 'record'} found.
        </p>
      </React.Fragment>
    );
  }
}

export default Table;
