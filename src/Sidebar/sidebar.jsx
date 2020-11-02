import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAuth } from '../Reducers/authentication';
import { logoutUser } from '../Reducers/user';
import './sidebar.css';

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function signout() {
    dispatch(logoutAuth());
    dispatch(logoutUser());
  }
  return (
    <div className='sidebar'>
      <h1 className='title'>Squish</h1>
      <ul>
        <Link to='/' className='nav-link'>
          <li>Dashboard</li>
        </Link>

        <Link to='/bugs' className='nav-link'>
          <li>View Bugs</li>
        </Link>
        <Link to='/bugs/completed' className='nav-link'>
          <li>View Completed</li>
        </Link>

        {auth.admin && (
          <Link to='/create' className='nav-link'>
            <li>Create Bugs</li>
          </Link>
        )}
        {auth.admin && (
          <Link to='/createUser' className='nav-link'>
            <li>Create User</li>
          </Link>
        )}
      </ul>
      <button className=' logout' onClick={signout}>
        Logout
      </button>
    </div>
  );
};
