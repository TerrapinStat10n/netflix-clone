import React from 'react';
import { connect } from 'react-redux';
import './SideDrawer.css';
import avatar from '../avatar.png';
import { logout } from '../redux/actions';
import { Link, useHistory } from 'react-router-dom';

const SideDrawer = props => {
    const history = useHistory();
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }

    const submitHandler = e => {
      e.preventDefault();
      fetch('https://netflix-clone-api-cb.herokuapp.com/api/rest-auth/logout/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      })
      .then( data => data.json())
      .then(
        data => {
          console.log(data);
          props.logout();
          localStorage.removeItem('token');
          history.push('/login');
        }
      )
      .catch( error => console.error(error))
    }
    return (
      <nav className={drawerClasses}>
        <ul>
            <li className="drawer-list">
                <img className="avatar" src={avatar} alt="avatar-icon" /> Netflix User
            </li>
            <li className="drawer-list">
                <Link to="/login">
                  <button className="signout-link" onClick={submitHandler}>Sign out of Netflix</button> 
                </Link>
            </li>
        </ul>
      </nav>
    )
  }



export default connect(null, { logout })(SideDrawer);