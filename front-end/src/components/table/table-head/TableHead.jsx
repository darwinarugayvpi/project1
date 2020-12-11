import React from 'react';

const TableHead = ({ tableHead }) => {
  return (
    <thead>
      <tr scope="col">
        {tableHead.length === 0 ? (
          <th style={{ textAlign: 'center' }}>No record.</th>
        ) : (
          tableHead
            .filter((list) => list !== '__v')
            .map((list) => {
              return <th key={list}>{list}</th>;
            })
        )}
        {tableHead.length !== 0 ? <th>Actions</th> : null}
      </tr>
    </thead>
  );
};

export default TableHead;
