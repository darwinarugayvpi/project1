import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Button from '../../button/Button';

const TableBody = ({ tableBody, onDelete }) => {
  return (
    <tbody>
      {tableBody.map((user) => {
        return (
          <tr scope="row">
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.middleName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.dateOfBirth.slice(0, 10)}</td>
            <td>
              <Link to={`/edit/${user._id}`}>
                <EditIcon />
              </Link>

              <Button action handleDelete={() => onDelete(user._id)}>
                <DeleteIcon />
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
