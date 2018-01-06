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
                    exact
                    to="/">
                    <i className="fa fa-table"></i>Dashboard
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to="/report">
                    <i className="fa fa-line-chart"></i>Report
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
    );
};

export default SideBar;