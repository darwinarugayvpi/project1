import React from 'react';

const TableBody = ({ tableBody }) => {
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
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
