import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: "auth",
    initialState: {
        superadmin:false,
        admin: false,
        loggedIn: false,
    },
    reducers: {
        signIn: (state,action)=>{
            const{email,password}=action.payload
            state.loggedIn=true
            state.admin=true
        },
        signOut: (state)=>{
            state.loggedIn=false
            state.admin=false
        },
        createUser:(state,action)=>{

        }
    }
})

export default slice.reducer
export const {signIn,signOut,createUser} = slice.actions