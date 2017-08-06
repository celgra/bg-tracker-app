import React from 'react';
//import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <ul className="nav navbar-nav ml-auto">   
                <li>
                    <a className="nav-item nav-link" 
                    onClick={() => props.signOut()}>
                        Sign Out
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;