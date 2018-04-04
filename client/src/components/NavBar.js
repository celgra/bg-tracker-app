import React from 'react';
//import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div style={ { marginRight: '10px' } }>
            <ul className="nav navbar-nav">   
                <li classname="nav-item">
                    <a 
                        className="nav-link"
                        style={ { cursor: 'pointer' } }
                        onClick={() => props.signOut()}>
                        Sign Out
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;