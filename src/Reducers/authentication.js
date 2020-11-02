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
      dispatch(signIn(userData));
    }
  };
}

export function logoutAuth() {
  return (dispatch) => {
    dispatch(signOut());
  };
}
