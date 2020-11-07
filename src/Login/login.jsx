import React, { useState, useEffect } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleRefresh, login } from '../Reducers/authentication';
import { fetchUsers, createUser, handleUserRefresh } from '../Reducers/user';

export default (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    company: '',
    admin: true,
  });
  const [create, setCreate] = useState(false);
  useEffect(() => {
    dispatch(handleUserRefresh());
    dispatch(handleRefresh());
    dispatch(login(user));
    history.push('/');
  }, [user, dispatch, history]);
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();
    dispatch(fetchUsers(formInput.email, formInput.password));
  }
  function createNewUser(e) {
    setCreate(!create);
    e.preventDefault();
    dispatch(createUser(newUser));
  }
  function inputCreate(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      {!create ? (
        <div className='login-background'>
          <form className='login-form' onSubmit={submit}>
            <h1>Squish</h1>
            <input
              name='email'
              type='text'
              placeholder='email'
              onChange={input}
              value={formInput.email}
              required
            />
            <input
              name='password'
              type='password'
              placeholder='password'
              onChange={input}
              value={formInput.password}
              required
            />
            <div style={{ width: '100%' }}></div>
            <button type='submit'>Login</button>
            <div style={{ width: '100%' }}></div>
            <button
              onClick={() => props.about(true)}
              style={{ marginLeft: '5px', marginRight: '5px' }}
            >
              About
            </button>
            <div style={{ width: '100%' }}></div>
            <button
              type='reset'
              onClick={() => setCreate(!create)}
              style={{ marginLeft: '5px', marginRight: '5px' }}
            >
              Create Account
            </button>
            <div style={{ width: '100%' }}></div>
          </form>
        </div>
      ) : (
        <div className='login-background'>
          <form className='login-form' onSubmit={createNewUser}>
            <h1>Bug Tracker</h1>
            <input
              name='email'
              type='text'
              placeholder='email'
              onChange={inputCreate}
              value={newUser.name}
              required
            />
            <input
              name='password'
              type='password'
              placeholder='password'
              onChange={inputCreate}
              value={newUser.password}
              required
            />
            <input
              name='company'
              type='company'
              placeholder='company'
              onChange={inputCreate}
              value={newUser.company}
              required
            />
            <div style={{ width: '100%' }}></div>
            <button type='submit'>Create</button>
            <button type='reset' onClick={() => setCreate(!create)}>
              Back
            </button>
          </form>
        </div>
      )}
    </>
  );
};
