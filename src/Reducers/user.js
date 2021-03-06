import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: [{}],
  reducers: {
    getUser: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;

export function fetchUsers(email, password) {
  const user = { email, password };
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://secure-journey-81702.herokuapp.com/api/users/login',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error.message);
      }
      dispatch(getUser(data));
    } catch (error) {}
  };
}
export function logoutUser() {
  return (dispatch) => {
    dispatch(getUser({}));
  };
}
export function createUser(userInfo) {
  return function dispatch() {
    const data = fetch(
      'https://secure-journey-81702.herokuapp.com/api/users/create',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      }
    );
    return data;
  };
}

export function handleUserRefresh() {
  return (dispatch) => {
    if (sessionStorage.getItem('userid')) {
      const userData = {
        id: sessionStorage.getItem('userid'),
        email: sessionStorage.getItem('useremail'),
        password: sessionStorage.getItem('userpass'),
        admin: sessionStorage.getItem('useradmin'),
        company: sessionStorage.getItem('usercompany'),
      };
      dispatch(getUser(userData));
    }
  };
}
