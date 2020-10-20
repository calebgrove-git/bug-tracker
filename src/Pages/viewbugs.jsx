import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getBugs} from '../Reducers/bug'
import BugCard from '../BugCard/Bugcard.jsx'
import './viewbugs.css'
import BugView from '../BugView/bugView'

export default ()=>{
 const dispatch = useDispatch()
 const {bugs} = useSelector(state=>state)
 let bugLength = bugs.length<1
 const [displayBug, setDisplayBug] = useState({
     name:'',
     isDisplayed:false
 })
 useEffect(() => {
     dispatch(getBugs())

 }, [ bugLength,dispatch])
 function bugClicked(name){
    setDisplayBug({
        isDisplayed:!displayBug.isDisplayed,
        name:name
    })
 }
return(
        <div className='page-container'>
            {bugs.map((bug,key)=>(
                    <BugCard key={key} bug={bug} clicked={bugClicked}/>
            ))}
            {displayBug.isDisplayed && <BugView clicked={bugClicked} bug={bugs.filter((bug)=>bug.name === displayBug.name)[0]}/>}
        </div>
    )
}