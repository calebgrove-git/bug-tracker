import React from 'react'
import './dashboardCard.css'
import Priority from '../Reducers/priority'
export default (props)=>{
    const {level, color} = Priority(props.priority)
    return(
        <div className='dashboard' onClick={props.clicked} style={{color:color}}>
            <h2 style={{color:color}}>Total {level}</h2>
            <p style={{color:color}}>{props.count}</p>
        </div>
    )
}