import React from 'react';

import './form-radio.styles.scss';

const FormRadio = ({ id, handleChange, ...otherProps }) => {
  return (
    <React.Fragment>
      <label style={{ marginLeft: '2px' }}>
        {id.charAt(0).toUpperCase() + id.slice(1)}
        <input
          className="form-radio"
          type="radio"
          name="gender"
          onChange={handleChange}
          {...otherProps}
        />
      </label>
    </React.Fragment>
  );
};

export default FormRadio;
