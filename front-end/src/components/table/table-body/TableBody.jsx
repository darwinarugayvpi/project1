import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Button from '../../button/Button';

class TableBody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.tableBody !== this.props.tableBody) {
  //     console.log(`not equal`);
  //   }
  // }
  render() {
    // console.log(this.props);
    return (
      <tbody>
        {this.props.tableBody.map((user) => {
          return (
            <tr scope="row">
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.middleName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>
                {user.dateOfBirth !== null
                  ? user.dateOfBirth.slice(0, 10)
                  : 'None'}
              </td>
              <td>
                <Link to={`/edit/${user._id}`}>
                  <EditIcon />
                </Link>

                <Button
                  action
                  handleDelete={() => this.props.onDelete(user._id)}
                >
                  <DeleteIcon />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
