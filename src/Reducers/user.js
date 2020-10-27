import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'user',
    initialState:[{

    }],
    reducers:{
         getUser:(state, {payload})=>{
            return state = payload
    }
    }
})

export default slice.reducer

export const {getUser} = slice.actions

export function fetchUsers(email, password) {
    return async dispatch => {
      try {
        const response =  await fetch(`https://secure-journey-81702.herokuapp.com/api/users/${email}/${password}`)
        const data =  await response.json()
        if(data.error){alert(data.error.message)}
        dispatch(getUser(data))
      } catch (error) {
        console.log(error)
      }
    }
  }
export function logoutUser(){
    return dispatch =>{
        dispatch(getUser({}))
    }
}
export function createUser(userInfo){
    return function dispatch(){
        
        const data = fetch('https://secure-journey-81702.herokuapp.com/api/users/create',{
            method: 'POST',
            mode: 'cors',
            headers:{

                'Content-Type':'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        return data
    }
}