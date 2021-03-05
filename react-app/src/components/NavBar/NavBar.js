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
          <NavLink className='navbar__link' to="/" exact={true} activeClassName="active">
            Home
              </NavLink>
        </div>
        <div className='navbar__container-middle'>
           Expedition Leader
        </div>
        <div className='navbar__container-right'>
          {!user &&
              <>
                <LoginModal setAuthenticated={setAuthenticated} />
                <SignUpFormModal setAuthenticated={setAuthenticated} />
              </>
            }
          {user && <LogoutButton setAuthenticated={setAuthenticated}/>}
        </div >
      </div>
    </nav>
  );
}

export default NavBar;