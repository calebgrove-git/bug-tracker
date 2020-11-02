import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'bug',
  initialState: [],
  reducers: {
    getBugs: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export default slice.reducer;

export const { getBugs } = slice.actions;
export function fetchBugs(company) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://secure-journey-81702.herokuapp.com/api/bugs/get/${company}`
      );
      const data = await response.json();
      let sorted;
      if (data) {
        sorted = data.sort((a, b) => {
          return a.priority - b.priority;
        });
      }
      dispatch(getBugs(sorted));
    } catch (error) {}
  };
}
export function postBug(bug) {
  return function dispatch() {
    return fetch('https://secure-journey-81702.herokuapp.com/api/bugs', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bug),
    });
  };
}

export function patchBug(bug) {
  return function dispatch() {
    return fetch(`https://secure-journey-81702.herokuapp.com/bugs/${bug.id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bug),
    });
  };
}

export function completeBug(bug) {
  return function dispatch() {
    return fetch(
      `https://secure-journey-81702.herokuapp.com/api/bugs/${bug.id}/complete`,
      {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bug),
      }
    );
  };
}

export function deleteBug(bug) {
  return function dispatch() {
    return fetch(
      `https://secure-journey-81702.herokuapp.com/api/bugs/${bug.id}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
}
