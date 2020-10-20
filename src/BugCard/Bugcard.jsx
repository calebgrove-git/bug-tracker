import React from 'react'
import './bugcard.css'
import Priority from '../Reducers/priority'
export default (props)=>{
function clicked(){
    props.clicked(name)
}
const {name, priority, version} = props.bug
const {level, color} = Priority(priority)
    return(
        <div className='bugcard' onClick={clicked}>
            <h2 className='name'>
                {name}
            </h2>
            <h4 className='priority' style={{color:color}}>
                {level}
            </h4>
            <h5 className='version'>
                {version}
            </h5>
        </div>
    )
}