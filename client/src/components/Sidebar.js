import React from 'react';

import {  NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <nav className='sidebar-nav open'>
              <ul className='nav'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to="/">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
    );
};

export default SideBar;