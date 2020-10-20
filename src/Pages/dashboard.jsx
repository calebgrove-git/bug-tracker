import React, {useEffect} from 'react'
import './dashboard.css'
import {useDispatch, useSelector} from 'react-redux'
import DashboardCard from '../Dashboard/dashboardCard.jsx'
import {getBugs} from '../Reducers/bug'
import {useHistory} from 'react-router-dom'
export default ()=>{
const dispatch = useDispatch()
const bugs = useSelector(state => state.bugs)
const history = useHistory()
useEffect(() => {
    dispatch(getBugs())
}, [bugs===undefined])
let highCount =0
let medCount= 0
let lowCount= 0
function clickHandler(){
    history.push('/bugs')
}
function filterBugs(priority){
    return bugs.filter((bug)=>{ return bug.priority==priority})
}
if(bugs!== undefined){
highCount = filterBugs(1)
medCount = filterBugs(2)
lowCount = filterBugs(3)
}
    return(
        <div className='page-container'>
        <DashboardCard priority='1' count={highCount.length} clicked={clickHandler}></DashboardCard>
        <DashboardCard priority='2' count={medCount.length} clicked={clickHandler}></DashboardCard>
        <DashboardCard priority='3' count={lowCount.length} clicked={clickHandler}></DashboardCard>
        </div>
    )
}