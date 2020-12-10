import React from 'react';

const FormDate = ({ handleChange }) => {
  return (
    <div className="group">
      <label>
        Birthdate:
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          max="2020/01/01"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FormDate;
