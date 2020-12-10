import React from 'react';

const TableHead = ({ tableHead }) => {
  return (
    <thead>
      {/* <TableRow data={tableHead} scope="col" /> */}
      <tr scope="col">
        {tableHead
          .filter((list) => list !== '__v')
          .map((list) => {
            return <th>{list}</th>;
          })}
        <td>Actions</td>
      </tr>
    </thead>
  );
};

export default TableHead;
