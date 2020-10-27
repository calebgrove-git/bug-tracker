import React, {useEffect} from 'react'
import './dashboard.css'
import {useDispatch, useSelector} from 'react-redux'
import DashboardCard from '../Dashboard/dashboardCard.jsx'
import {fetchBugs} from '../Reducers/bug'
import {useHistory} from 'react-router-dom'
export default ()=>{
const dispatch = useDispatch()
const bugs = useSelector(state => state.bugs)
const user = useSelector(state=>state.user)
const history = useHistory()
useEffect(() => {
    dispatch(fetchBugs(user.company))
}, [dispatch])
let highCount =0
let medCount= 0
let lowCount= 0
let filteredBugs = bugs
if(filteredBugs!==undefined){filteredBugs=filteredBugs.filter(bug=> bug.completed===false)}

function filterBugs(priority){
    return filteredBugs.filter((bug)=>{ return bug.priority==priority})
}
if(bugs!== undefined){
highCount = filterBugs(1)
medCount = filterBugs(2)
lowCount = filterBugs(3)
}
    return(
        <div className='page-container'>
        <DashboardCard priority='1' count={highCount.length} clicked={()=>history.push('/bugs/1')}></DashboardCard>
        <DashboardCard priority='2' count={medCount.length} clicked={()=>history.push('/bugs/2')}></DashboardCard>
        <DashboardCard priority='3' count={lowCount.length} clicked={()=>history.push('/bugs/3')}></DashboardCard>
        </div>
    )
}