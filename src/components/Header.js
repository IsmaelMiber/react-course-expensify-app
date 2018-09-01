import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li> <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink> </li>
            <li> <NavLink to="/create" activeClassName="is-active" exact={true} >Create Expense Page</NavLink> </li>
            <li> <NavLink to="/help" activeClassName="is-active" exact={true} >Help Page</NavLink> </li>
        </ul>
    </header>
);

export default Header;