import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="item">
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/add">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
