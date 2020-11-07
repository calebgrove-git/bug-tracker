import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    admin: false,
    loggedIn: false,
  },
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload;
      state.loggedIn = true;
      state.admin = payload.admin;
    },
    signOut: (state) => {
      state.user = {};
      state.loggedIn = false;
      state.admin = false;
    },
  },
});

export default slice.reducer;
export const { signIn, signOut, createUser } = slice.actions;
export function login(userData) {
  return (dispatch) => {
    if (userData.id !== undefined) {
      sessionStorage.setItem('userid', userData.id);
      sessionStorage.setItem('useremail', userData.email);
      sessionStorage.setItem('userpass', userData.password);
      sessionStorage.setItem('useradmin', userData.admin);
      sessionStorage.setItem('usercompany', userData.company);
      dispatch(signIn(userData));
    }
  };
}

export function logoutAuth() {
  return (dispatch) => {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('useremail');
    sessionStorage.removeItem('userpass');
    sessionStorage.removeItem('useradmin');
    sessionStorage.removeItem('usercompany');
    dispatch(signOut());
  };
}

export function handleRefresh() {
  return (dispatch) => {
    if (sessionStorage.getItem('userid') !== null) {
      const userData = {
        id: sessionStorage.getItem('userid'),
        email: sessionStorage.getItem('useremail'),
        password: sessionStorage.getItem('userpass'),
        admin: sessionStorage.getItem('useradmin'),
        company: sessionStorage.getItem('usercompany'),
      };
      dispatch(signIn(userData));
    }
  };
}
