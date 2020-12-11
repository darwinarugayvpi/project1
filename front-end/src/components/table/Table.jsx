import React, { Component } from 'react';
import Swal from 'sweetalert2';

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
            if (data) {
              Swal.fire({
                icon: 'success',
                title: 'Delete',
                text: 'Successfully deleted!',
              });
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  render() {
    // console.log(this.props.employees);
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
