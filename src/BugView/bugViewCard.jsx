import React from 'react'
import './bugViewCard.css'
export default(props)=>{

    return (
        <div className='bug-view-card'>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}