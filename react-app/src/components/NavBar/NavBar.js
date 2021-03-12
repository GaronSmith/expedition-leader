import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SignUpFormModal from "../auth/SignUpModal/"
import LoginModal from "../auth/LoginModal/"
import {useSelector} from 'react-redux'
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const user = useSelector(state => state.session.user)
  return (
    <nav >
      <div className='navbar__container'>
        <div className='navbar__container-left'>
          <NavLink className='navbar__link' to="/dashboard" exact={true} activeClassName="active">
            <h1>Home</h1>
              </NavLink>
        </div>
        <div className='navbar__container-middle'>
           <h1 className="navbar__title"> Expedition Leader</h1>
        </div>
        <div className='navbar__container-right'>
          {!user &&(
              <>
                <LoginModal className='nav_button' setAuthenticated={setAuthenticated} />
                <SignUpFormModal className='nav_button' setAuthenticated={setAuthenticated} />
              </>
          )}
          {user && <LogoutButton className='nav_button' setAuthenticated={setAuthenticated}/>}
        </div >
      </div>
    </nav>
  );
}

export default NavBar;