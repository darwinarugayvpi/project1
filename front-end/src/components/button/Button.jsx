import React from 'react';

import './button.styles.scss';

const Button = ({ children, handleDelete, action }) => {
  return (
    <button onClick={handleDelete} className={action ? 'icon' : 'button'}>
      {children}
    </button>
  );
};

export default Button;
