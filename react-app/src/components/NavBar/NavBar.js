import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import {useSelector} from 'react-redux'
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const user = useSelector(state => state.session.user)
  
  return (
    <nav className='navbar__container'>

      <ul>
        <li>
          <NavLink className="nav-link" to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;