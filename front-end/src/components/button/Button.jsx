import React from 'react';

import './button.styles.scss';

const Button = (props) => {
  return (
    <div className="group">
      <button className="button">{props.children}</button>
    </div>
  );
};

export default Button;
