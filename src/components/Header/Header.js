import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <NavLink to="/">
                    StarDB
                </NavLink>
            </h3>
            <ul className="d-flex">
                <li>
                    <NavLink to="/people/">People</NavLink>
                </li>
                <li>
                    <NavLink to="/planet/">Planets</NavLink>
                </li>
                <li>
                    <NavLink to="/starship/">Starships</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;