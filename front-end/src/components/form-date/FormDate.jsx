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
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FormDate;
