import {createSlice} from '@reduxjs/toolkit'
import {retreiveBugs} from './bugstore'
const slice  = createSlice({
    name: "bug",
    initialState:[],
    reducers:{
        getBugs:state=> retreiveBugs(),

        createBugs:(state,actions)=>{
        },
        updateBug:(state,actions)=>{

        },
        markCompleted:(state,actions)=>{

        }
    }
})

export default slice.reducer

export const {getBugs,createBugs,updateBug,markCompleted} = slice.actions